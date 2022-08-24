<template>
  <div>
    <container
        v-for="modal in modals" :key="modal.id" :is="modal.component">
      <template></template>
    </container>
  </div>
</template>

<script setup lang="ts">
let modals = [];
</script>

<style scoped>

</style>
