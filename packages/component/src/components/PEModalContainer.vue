<template>
  <div style="height: 450px; position: relative">
    <div class="modal-backdrop show"></div><!--TODO how to show backdrop properly-->
    <component
        v-for="(modal, index) in $modal.modals"
        :key="index"
        :is="modal.component"
        :modal="modal">
      {{ modal }}
    </component>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
