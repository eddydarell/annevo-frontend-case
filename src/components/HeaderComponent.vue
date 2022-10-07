<script setup lang="ts">
import { useSideBarStore } from "@/stores/sidebar";
import { useCounterStore } from "@/stores/counter";

const store = useSideBarStore();
</script>

<template>
  <div class="header-container">
    <div>
      <h1 @click="useCounterStore().increment()">
        {{ store.getTitle() ? store.getTitle() : "Header" }}
      </h1>
      <p>{{ useCounterStore().count }} header clicks</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding: 20px 0;
  cursor: pointer;
}

div.header-container {
  grid-area: header;
  background: rgb(60, 60, 60);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
