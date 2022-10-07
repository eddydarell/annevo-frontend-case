<script setup lang="ts">
import SadFace from "@/components/icons/IconSadFace.vue";
</script>
<template>
  <div class="error-container">
    <SadFace />
    <h3>Unable to load items...</h3>
  </div>
</template>
<style scoped>
div.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
h3 {
  color: #f95c5c;
  margin-top: 20px;
}
</style>
