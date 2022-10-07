import { ref } from "vue";
import { defineStore } from "pinia";

export const useSideBarStore = defineStore("title", () => {
  const title = ref("");
  const fetchTries = ref(0);

  function setTitle(newTitle: string): void {
    title.value = newTitle;
  }

  function getTitle(): string {
    return title.value;
  }

  function incrementTries(): void {
    fetchTries.value++;
  }

  function resetTries(): void {
    fetchTries.value = 0;
  }

  return { title, setTitle, getTitle, incrementTries, fetchTries, resetTries };
});
