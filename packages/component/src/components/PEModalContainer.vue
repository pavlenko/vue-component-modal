<template>
  <div style="height: 450px; position: relative">
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
