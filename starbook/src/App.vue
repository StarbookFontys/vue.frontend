<script>
import Toolbar from './components/Toolbar.vue'
import Grid from './components/Grid.vue';
import { ref } from 'vue';
import { provide } from 'vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Grid
  },
  setup() {
    const userEmail = ref('');

    provide('userEmail', userEmail);

    const handleUserLoggedIn = (email) => {
      userEmail.value = email;
    };

    return {
      handleUserLoggedIn
    };
  }
};
</script>

<template>
   <Toolbar @user-logged-in="handleUserLoggedIn"/>
  <grid/>
</template>