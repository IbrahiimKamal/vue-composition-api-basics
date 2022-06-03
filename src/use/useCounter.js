import { reactive, computed, watch, onMounted, nextTick } from "vue";

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

export function useCounter() {
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

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
