<script setup lang="ts">
import { ref, onMounted } from "vue";
import SideBarItem from "@/components/SideBarItemComponent.vue";
import Loader from "@/components/LoaderComponent.vue";
import Error from "@/components/ErrorComponent.vue";
import { useSideBarStore } from "@/stores/sidebar";

const items = ref({ data: [{ name: "", children: [] }] });
const isLoading = ref(true);
const showError = ref(false);

async function fetchSideBarItems(): Promise<void> {
  const url = "https://run.mocky.io/v3/bca27736-b535-4547-88a8-3b5e04687d0d";

  try {
    items.value = await (await fetch(url)).json();
    isLoading.value = false;
    useSideBarStore().resetTries();
  } catch (err) {
    useSideBarStore().incrementTries();
    if (useSideBarStore().fetchTries < 5) {
      setTimeout(() => {
        console.log(
          `Retrying fecth after ${useSideBarStore().fetchTries} attempts...`
        );
        fetchSideBarItems();
      }, 3000);
    } else {
      showError.value = true;
    }
  }
}

onMounted(() => {
  fetchSideBarItems();
});
</script>

<template>
  <div class="sidebar-container">
    <Loader v-if="isLoading && !showError" />
    <Error v-else-if="showError" />
    <ul v-else class="sidebar-tree">
      <SideBarItem v-for="item in items.data" :item="item" :key="item.name" />
    </ul>
  </div>
</template>

<style scoped>
ul.sidebar-tree {
  padding: 0;
}
div.sidebar-container {
  grid-area: menu;
  background: rgb(60, 60, 60);
  padding: 20px;
}
</style>
