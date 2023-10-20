<template>
    <div class="card">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>
    </div>
  </template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Card',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  })
</script>

<style scoped>
.card {
    min-width: 300px;
    height: 200px;
    border: 1px solid black;
    margin: 20px;
    padding: 10px;
    display: inline-block;
    background-color: white;
}
</style>