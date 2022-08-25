<template>
  <div style="height: 450px; position: relative">
    <!-- TODO backdrop if any modal exists + below latest one??? -->
    <div v-if="$modal.modals.length > 0" class="modal-backdrop show" :style="{'z-index': $modal.modals.length + 1071}"></div>
    <template v-for="(modal, index) in $modal.modals" :key="index">
      <component :is="modal.component" :modal="modal" :style="{'z-index': index + 1072, 'margin-top': (index * 10) + 'px'}">{{ modal }}</component>
    </template>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
