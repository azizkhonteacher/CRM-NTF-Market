<template>
  <div class="app-container">
    <div class="sidebar">
      <div class="logo">
        <NuxtLink to="/">
          <img src="~/assets/Logo.png" alt="logo img" />
        </NuxtLink>
      </div>
      <nav>
        <ul>
          <!-- DASHBOARD -->
          <li>
            <NuxtLink to="/">
              <dashBoard />
            </NuxtLink>
          </li>
          <!-- BID -->
          <li>
            <NuxtLink to="/bid">
              <bid />
            </NuxtLink>
          </li>
          <!-- HEART -->
          <li>
            <NuxtLink to="/heart">
              <like />
            </NuxtLink>
          </li>
          <!-- STAR -->
          <li>
            <NuxtLink to="/star">
              <star />
            </NuxtLink>
          </li>
          <!-- PROFILE -->
          <li>
            <NuxtLink to="/profile">
              <profile />
            </NuxtLink>
          </li>
          <!-- SETTING -->
          <li>
            <NuxtLink to="/setting">
              <setting />
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- SIGN OUT -->
      <button>
        <NuxtLink to="/">
          <signOut />
        </NuxtLink>
      </button>
    </div>

    <div class="main-content">
      <div class="header">
        <div class="container">
          <div class="search_form">
            <form>
              <button type="button">
                <img src="~/assets/images/icons/Search.svg" alt="" />
              </button>
              <input type="text" placeholder="Search Here" />
            </form>
          </div>

          <div class="right_actives">
            <div class="dark_mode">
              <button @click="darkModeToggle">
                <img
                  src="~/assets/images/icons/moon.svg"
                  alt=""
                  v-if="!store.darkMode"
                />
                <img
                  src="~/assets/images/icons/sun.svg"
                  alt=""
                  v-if="store.darkMode"
                />
              </button>
            </div>
            <div class="news_bell">
              <button>
                <bell />
              </button>
            </div>
            <div class="user_avatar">
              <img src="~/assets/images/jpg/avatar.jpg" alt="" />
              <img
                src="assets/images/png/default_user_avatar.png"
                alt="default user avatar"
                v-if="false"
              />
            </div>
          </div>
        </div>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
// COMPONENTS ICONS
import dashBoard from "~/components/icons/dashBoard.vue";
import bid from "~/components/icons/bid.vue";
import like from "~/components/icons/like.vue";
import star from "~/components/icons/star.vue";
import profile from "~/components/icons/profile.vue";
import setting from "~/components/icons/setting.vue";
import signOut from "~/components/icons/signOut.vue";
import bell from "~/components/icons/bell.vue";

import { ref, onMounted } from "vue";
import { watch } from "vue";
import { useStore } from "~/store/store";

const store = useStore();
function darkModeToggle() {
  store.darkMode = !store.darkMode;
  if (store.darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
</script>

<style scoped></style>
