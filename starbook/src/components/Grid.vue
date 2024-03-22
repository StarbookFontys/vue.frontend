<template>
    <div>
      <div class="grid">
        <div class="col" v-for="(card, index) in cards" :key="index">
          <Card :title="card.title" :description="card.description" />
        </div>
      </div>
      <button @click="addCard">Add Card</button>
    </div>
  </template>
  
  <script setup>
  import Card from './Card.vue';
  import { ref } from 'vue';
  
  const cards = ref([]);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/2/sample title/kekekekek');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error receiving information:', error);
      return null;
    }
  };
  
  const addCard = async () => {
    const data = await fetchData();
    if (data) {
      const newCard = {
        title: data.title,
        description: data.description
      };
      cards.value.push(newCard);
    }
  };
  </script>