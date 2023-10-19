<template>
  <NavBar />
  <!-- <NavBar v-if="!$route.meta.hideNavbar" /> -->
  <router-view />
</template>

<script lang="ts" setup>
  //
  import NavBar from './components/NavBar.vue'
</script>
