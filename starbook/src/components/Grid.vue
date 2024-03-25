<template>
    <div>
      <div class="grid">
        <div class="col" v-for="(card, index) in cards" :key="index">
          <Card :title="card.title" :description="card.description" />
        </div>
      </div>
      <button @click="addCard()">Add Card</button>
    </div>
  </template>
  
  <script setup>
  import Card from './Card.vue';
  </script>

<script>

export default {
  props:{
        username: String,
        email: String 
    },
  created(){
    this.emitter.on('event1', this.handleEvent)
  },
  methods: {
    handleEvent(payload){
      console.log('Received event! preparing output..')
      console.log('I received ' + payload.user + payload.email);
      addCard(payload)
    }
  }
}

import { ref } from 'vue';
  
  const cards = ref([]);
  const fetchData = async (incoming) => {
  try {
    const response = await fetch('http://localhost:5001/2/P/' + incoming.title + '/' + incoming.author + '/' + incoming.desc, {
      method: 'POST',
    });
    //const data = await response.json();
    //return data;
  } catch (error) {
    console.error('Error receiving information:', error);
    return null;
  }
};
  
  const addCard = async (incoming) => {
    const data = await fetchData(incoming);
    if (data) {
      const newCard = {
        title: data.title,
        description: data.description
      };
      cards.value.push(newCard);
    }
  };
</script>