<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>username is: {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from "vue";
/* 
    ---- props
*/

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Modal title",
  },
});

/* 
    ---- emit
*/
const emit = defineEmits(["update:modelValue"]);

// user data
const userData = inject("userData");
</script>

<style scoped>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
