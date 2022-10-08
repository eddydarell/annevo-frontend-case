<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBarComponent from "@/components/SideBarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div class="page-container">
    <HeaderComponent />
    <SideBarComponent />
    <RouterView />
  </div>
</template>

<style scoped>
div.page-container {
  display: grid;
  grid-template-columns: 25% auto auto auto;
  grid-template-rows: 20% auto;
  grid-template-areas:
    "header header header header"
    "menu main main main";
  gap: 10px;
  background: rgba(60, 60, 60, 0.5);
  padding: 10px;
  width: 80vw;
  height: 90vh;
}

@media (max-width: 512px) {
  div.page-container {
    grid-template-columns: 50% auto auto auto;
    gap: 5px;
    width: 100vw;
    height: 100vh;
    padding: 5px;
  }
}
@media (max-width: 1024px) and (min-width: 512px) {
  div.page-container {
    grid-template-columns: 33% auto auto auto;
    width: 100vw;
    height: 100vh;
  }
}
</style>
