<template>
    <div>
      <div class="grid">
        <div class="col" v-for="(card, index) in cards" :key="index">
          <Card :title="card.title" :description="card.description" :author="card.author" />
        </div>
      </div>
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
    mounted() {
  this.fetchUserPosts()
},
  created(){
    this.emitter.on('event1', this.handleEvent)
  },
  methods: {
    handleEvent(payload){
      addCard(payload)
    },
    fetchUserPosts(){
  //     fetch('http://localhost:5001/2/Post/John Doe', {
  //   method: 'GET',
  // })
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Received error code' + response.status);
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   data.forEach(model => {
  //     const newCard = {
  //       title: model.title,
  //       description: model.description,
  //       author: model.author
  //     };
  //     cards.value.push(newCard);
  //   });
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
    }
  }
}

import { ref } from 'vue';
  
  const cards = ref([]);
  const SendData = async (incoming) => {
  try {
    const response = await fetch('http://localhost:5001/2/P/' + incoming.title + '/' + incoming.author + '/' + incoming.desc, {
      method: 'POST',
    });
  } catch (error) {
    console.error('Error receiving information:', error);
    return null;
  }
};
  
  const addCard = async (incoming) => {
    await SendData(incoming);
    location.reload();
    }
</script>