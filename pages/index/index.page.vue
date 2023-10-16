<template>
  <h1 class="title">
    Welcome to <br />
    &emsp;&emsp; 灰鲸 源地
  </h1>
  <h3 class="send-title">耐得住寂寞,守得了繁华!</h3>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script setup>
import Counter from "./compents/Counter.vue";
</script>
<style scoped>
.title {
  font-size: 76px;
  margin-bottom: 0;
  text-align: center;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #0259fc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.send-title {
  text-align: center;
  margin-top: 0;
}
</style>
