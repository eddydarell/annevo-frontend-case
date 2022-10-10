<script setup lang="ts">
import { useSideBarStore } from "@/stores/sidebar";
import { useCounterStore } from "@/stores/counter";

const sideBarStore = useSideBarStore();
const counterStore = useCounterStore();
</script>

<template>
  <div class="main-container">
    <div>
      <h1 @click="counterStore.increment()">
        {{ sideBarStore.getTitle() ? sideBarStore.getTitle() : "Main" }}
      </h1>
      <p>Header clicked {{ counterStore.count }} times</p>
      <p>Page URL slug: {{ this.$route.params.slug }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  cursor: pointer;
  padding: 20px 0;
  border-radius: 5px;
}
div.main-container {
  grid-area: main;
  background: rgb(60, 60, 60);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>
