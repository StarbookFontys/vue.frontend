<template>
    <div class="card">
      <Toolbar>
        <template #start>
          <Button icon="pi pi-plus" class="mr-2" severity="secondary" />
          <Button icon="pi pi-print" class="mr-2" severity="secondary" />
          <Button icon="pi pi-upload" @click="fetchdata" severity="secondary" />
        </template>
  
        <template #center>
          <IconField iconPosition="left">
            <InputIcon>
              <i class="pi pi-search" /> 
            </InputIcon>
            <InputText placeholder="Search" />
          </IconField>
        </template>
  
        <template #end>
            <LoginButton  @user-logged-in="emitUserLoggedIn"/>
            <CreateButton/>
        </template>
      </Toolbar>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CreateButton from './CreateButton.vue'
  import LoginButton from './LoginButton.vue'
  
  const items = ref([
    {
      label: 'Edit post',
      icon: 'pi pi-ellipsis-h',
    },
    {
      label: 'Delete post',
      icon: 'pi pi-times',
    },
  ]);
  
  </script>

<script>

export default {
  components: {
    LoginButton
  },
  methods: {
    emitUserLoggedIn(email) {
      this.$emit('user-logged-in', email);
    }
  }
};
</script>
  