<script setup lang="ts">
import { useSideBarStore } from "@/stores/sidebar";
import { useCounterStore } from "@/stores/counter";

const store = useSideBarStore();
</script>

<template>
  <div class="main-container">
    <div>
      <h1 @click="useCounterStore().increment()">
        {{ store.getTitle() ? store.getTitle() : "Main" }}
      </h1>
      <p>Header clicked {{ useCounterStore().count }} times</p>
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
