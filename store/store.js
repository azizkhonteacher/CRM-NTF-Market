import { defineStore } from "pinia";
export const useStore = defineStore("store", () => {
  const darkMode = ref(false);

  return {
    darkMode,
  };
});
