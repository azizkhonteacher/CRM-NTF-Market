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
      <button >
        <NuxtLink to="/">
          <signOut />
        </NuxtLink>
      </button>
    </div>

    <div class="main-content">
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
</script>

<style scoped></style>
