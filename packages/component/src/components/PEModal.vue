<template>
  <div class="modal show" style="display: block">
    <slot />
    <button type="button" @click="$modal.show('PEModal')">add</button>
    <button type="button" @click="$modal.hide(modal.id)">hide</button>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

//TODO move api to separate file for prevent recursive resolving
defineProps({
  modal: Object
})
</script>
