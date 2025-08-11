<template>
  <div>
    <h1>Dashboard</h1>
    <p>Bu yerda umumiy ma’lumotlar chiqadi.</p>
    <button @click="toggleDarkMode" class="theme-btn">
    {{ isDark ? "Light Mode" : "Dark Mode" }}
  </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  // Sahifa ochilganda tekshiramiz
  isDark.value = document.documentElement.classList.contains("dark");
});

function toggleDarkMode() {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
</script>

<style lang="scss" scoped>

</style>