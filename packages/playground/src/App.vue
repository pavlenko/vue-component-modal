<template>
  <div>
    Hello World
    <PEModalContainer></PEModalContainer>
    <button type="button" @click="$modal.show('PEModal')">show</button>
  </div>
</template>

<script setup lang="ts"></script>
