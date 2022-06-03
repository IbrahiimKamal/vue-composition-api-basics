<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
/* 
  --- imports
*/
import { reactive, computed, watch, onMounted, ref, nextTick } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

/* 
  --- appTitle
*/
const appTitle = "I Love Vite";

const appTitleRef = ref(null);

onMounted(() => {
  console.log(appTitleRef.value);
});

/* 
  --- counter
*/
const counterData = reactive({
  count: 0,
  title: "My Counter",
});

watch(
  () => counterData.count,
  (newCount) => {
    if (newCount === 20) {
      alert("You reached 20!");
    }
  }
);

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? "even" : "odd";
});

const increaseCounter = async (amount, e) => {
  counterData.count += amount;
  await nextTick();
  console.log("do somthing when counter has updated in the dom");
};

const decreaseCounter = (amount) => {
  counterData.count -= amount;
};
onMounted(() => {
  console.log("onMounted counter");
});
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
