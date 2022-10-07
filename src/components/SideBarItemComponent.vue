<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useSideBarStore } from "@/stores/sidebar";
import type SideBarItemType from "@/types/sidebarItemType";

const isOpened = ref(false);
const itemClass = ref("side-bar-item");
const store = useSideBarStore();

const props = defineProps<{
  item: SideBarItemType;
}>();

const routeRoot = ref("/page/");

function toggleMenuItem(title: string) {
  isOpened.value = !isOpened.value;
  if (isOpened.value) itemClass.value += " open";
  else itemClass.value = itemClass.value.replace(/ open/g, " ");

  store.setTitle(title);
}

function createSlug(text: string) {
  return text.replace(/\W/g, "-").toLowerCase();
}

onMounted(() => {
  if (props.item.children && props.item.children.length)
    itemClass.value += " parent";
});
</script>
<template>
  <li
    :class="
      item.name == store.getTitle() ? 'side-bar-item active' : 'side-bar-item'
    "
  >
    <div @click="toggleMenuItem(item.name)" :class="itemClass">
      <RouterLink :to="routeRoot + createSlug(item.name)">{{
        item.name
      }}</RouterLink>
    </div>
    <Transition>
      <ul v-if="isOpened && item.children && item.children.length">
        <SideBarItemComponent
          v-for="child of item.children"
          :item="child"
          :key="child.name"
        />
      </ul>
    </Transition>
  </li>
</template>
<style scoped>
div.parent {
  cursor: pointer;
  font-weight: bold;
}

div.parent::after {
  content: "";
  width: 5px;
  height: 5px;
  border: solid var(--color-text);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  margin-left: 10px;
}

div.parent.open::after {
  transform: rotate(45deg) translateY(-2px);
}

li.side-bar-item {
  font-weight: lighter;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s;
}

li.side-bar-item:hover {
  background: rgb(3, 3, 3, 0.1);
}

li.active {
  background: rgb(3, 3, 3, 0.2);
}
</style>
