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
          <SplitButton label="Create post" :model="items"></SplitButton
        ></template>
      </Toolbar>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
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
	name: 'HelloWorld',
	props: {
		msg: String
	},
  methods:{
    fetchdata(){
      console.log('I was pressed')
      fetch('http://localhost:5001/2/',{
        method: 'GET'
      }).then(Response => { Response.json()
        .then((res) =>{
          this.msg = res.title
      })})
    }
  }
};
</script>
  