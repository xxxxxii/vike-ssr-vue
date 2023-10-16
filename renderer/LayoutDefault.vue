<template>
  <div class="layout">
    <div class="navigation">
      <a href="/" class="logo">
        <img src="./logo.svg" height="64" width="64" alt="logo" />
      </a>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/starship">Starship</Link>
    </div>
    <div class="content"><slot /></div>
  </div>
</template>

<script setup>
import Link from "../components/Link.vue";
import { computed, ref, watch } from "vue";
import { usePageContext } from "./usePageContext";

// 获取到当前路由path
const pathName = ref(usePageContext().urlPathname);

watch(pathName, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

const setActive = (path) => {
  pathName.value = path;
};
// 设置菜单选中
const active = computed(() => (path) => {
  return pathName.value == path ? "nav-active" : "";
});
</script>

<style scoped>
.layout {
  display: flex;
  margin: auto;
  height: 100vh;
  overflow: hidden;
}
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  height: 100vh;
  overflow: auto;
  width: 100%;
}
.navigation {
  padding: 20px;
  padding-top: 42px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8em;
  height: 100vh;
  overflow: auto;
}
.navitem {
  padding: 3px;
  width: 100%;
  text-align: center;
  text-decoration: none;
}
.nav-active {
  background: #626262;
}
</style>
