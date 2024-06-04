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
  import { ref, onMounted } from 'vue';
  import { emitter } from '../eventBus';
  import Card from './Card.vue';

  </script>

<script>

export default {
  props:{
        username: String,
        email: String 
    },


created(){
  console.log('hi');
  emitter.on('user-logged-in', (email) => {
    console.log(email)
    fetchUserPosts(email);
  });
  emitter.on('event1', (payload) => {
    console.log(payload)
    SendData(payload)
  });
  },
  methods: {
    handleEvent(payload){
      addCard(payload)
    },
  }
}

import { ref } from 'vue';
  
const cards = ref([]);

  const SendData = async (incoming) => {
  try {
    const response = await fetch('https://localhost:44324/P/' + incoming.title + '/' + incoming.author + '/' + incoming.desc, {
      method: 'POST',
    });
  } catch (error) {
    console.error('Error receiving information:', error);
    return null;
  }
  fetchUserPosts(localStorage.getItem('UserInfo'));
};

const fetchUserPosts = async (author) => {
  try {
    const response = await fetch('https://localhost:44324/Post/' + author, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Received error code' + response.status);
    }
    const data = await response.json();
    cards.value = data.map(model => ({
      title: model.title,
      description: model.description,
      author: model.author
    }));
  } catch (error) {
    console.error('Error:', error);
  }
};

  const addCard = async (incoming) => {
    await SendData(incoming);
    location.reload();
    }
</script>