<template>
  <div class="post-detail">
    <h1>Post Detail</h1>
    <p>postID: {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHome">Go Home</button>
    </div>
    <div>
      <button @click="goToPost1">Go to post 1</button>
    </div>
    <p>
      <router-link to="/posts">&lt; Back</router-link>
    </p>
  </div>
</template>

<script setup>
/* 
  --- imports
*/
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  console.log("ID is: ", route.params.id);
  alert("ID is: " + route.params.id);
};

const goHome = () => {
  setTimeout(() => {
    router.push({ name: "home" });
  }, 3000);
};

const goToPost1 = () => {
  router.push({ name: "postDetail", params: { id: 1 } });
};
</script>
