<template>
  <div class="container">

      <div class="courses">
        <h2>Courses</h2>
        <div class="cards-container">
          <Card v-for="card in cards" :key="card.id" :title="card.title" :description="card.description" />
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/card.vue'

export default defineComponent({
  name: 'CardsContainer',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        { id: 1, title: 'Title 1', description: 'Description 1' },
        { id: 2, title: 'Title 2', description: 'Description 2' },
        { id: 3, title: 'Title 3', description: 'Description 3' },
        { id: 4, title: 'Title 4', description: 'Description 4' },
        { id: 5, title: 'Title 5', description: 'Description 5' },
        { id: 6, title: 'Title 6', description: 'Description 6' },
        { id: 7, title: 'Title 7', description: 'Description 7' }
      ]
    }
  }
})
</script>

<style scoped>

.container {
  position: absolute;
  top: 60px;
  width: 100%;
  height: 100%;

  padding: 20px;
  background-color: rgb(212, 212, 212);

  

}

.courses {
  padding: 20px;
  width: 100%;
  background-color: rgb(212, 212, 212);
  border: solid 1px black;
}

.cards-container {
  display: flex;
  flex-wrap: nowrap;
  
  overflow-x: auto;
  overflow-y: hidden;
  height: 250px; /* Set a fixed height */
}




</style>