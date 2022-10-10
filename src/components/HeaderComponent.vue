<script setup lang="ts">
import { useSideBarStore } from "@/stores/sidebar";
import { useCounterStore } from "@/stores/counter";

const sideBarStore = useSideBarStore();
const counterStore = useCounterStore();
</script>

<template>
  <div class="header-container">
    <div>
      <h1 @click="counterStore.increment()">
        {{ sideBarStore.getTitle() ? sideBarStore.getTitle() : "Header" }}
      </h1>
      <p>{{ counterStore.count }} header clicks</p>
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
