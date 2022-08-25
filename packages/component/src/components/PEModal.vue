<template>
  <div class="modal show" style="display: block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" aria-label="Close" @click="$modal.hide(modal.id)">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p><slot /></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="$modal.show('PEModal')">add</button>
          <button type="button" class="btn btn-secondary" @click="$modal.hide(modal.id)">hide</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

//TODO move api to separate file for prevent recursive resolving
defineProps({
  modal: Object
})
</script>
