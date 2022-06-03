<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        show dark modal
        <input v-model="showDarkModal" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = true">
      {{ showDarkModal ? "dark" : "light" }}
    </button>
    <component
      v-model="showModal"
      :is="showDarkModal ? ModalDark : Modal"
      title="My modal title (via prop)"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et maxime
        ab debitis, distinctio molestias repudiandae maiores unde, obcaecati
        modi possimus ad incidunt aliquam at aliquid dolore commodi. Delectus,
        possimus.
      </p>
    </component>
  </div>
</template>

<script setup>
/* 
    ---- imports
*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

/* 
    ---- modals
*/
const showDarkModal = ref(false);
const showModal = ref(false);
</script>
