

<template>
    <div class="card flex justify-content-center">
        <Button label="Create Post" @click="visible = true"/>
        <Dialog v-model:visible="visible" modal header="Create a post!" :style="{ width: '25rem' }">
            <div class="flex align-items-center gap-3 mb-3">
                <label for="Title " class="font-semibold w-6rem">Title</label>
                <InputText id="Title" class="flex-auto" v-model="Title" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="Description" class="font-semibold w-6rem">Description</label>
                <InputText style="height: 80px; width: 100%; vertical-align: top;" id="Description" class="flex-auto" v-model="Description" autocomplete="off" />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>'
                <Button type="button" label="Save" @click="visible = false; handleClick()"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<script>
const Title = ref('');
const Description = ref('');

export default {
    methods:{
        handleClick(){
            this.emitter.emit('event1', {title: Title.value, desc: Description.value, author: 'John Doe'})
            console.log('title = ' + Title.value)
        }
    }
};
</script>

