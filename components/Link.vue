<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<style scoped>
a {
  padding: 3px 10px;
  width: 100%;
  text-align: center;
  text-decoration: none;
}
a.active {
  background-color: #eee;
}
</style>
<script setup>
import { usePageContext } from "../renderer/usePageContext";
const pageContext = usePageContext();
</script>
