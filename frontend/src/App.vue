<template>
  <navbar v-if="!$route.meta.hideNavbar" />
  <router-view />
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import NavBar from './components/NavBar.vue';

  export default {
    name: 'app',
    components: {
      "navbar": NavBar,
    }
  }

</script>
