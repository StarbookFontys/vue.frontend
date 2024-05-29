<template>
    <div class="card flex justify-content-center">
        <Button label="Account management" @click="visible = true"/>
        <Dialog v-model:visible="visible" modal header="Create a post!" :style="{ width: '25rem' }">
            <div class="flex align-items-center gap-3 mb-3">
                <label for="email " class="font-semibold w-6rem">Email</label>
                <InputText id="Email" class="flex-auto" v-model="Email" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="password" class="font-semibold w-6rem">Password</label>
                <InputText type="password" id="password" class="flex-auto" v-model="password" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3">
                <p>I agree with the <a href='./TermsAndAgreements.pdf' target='_blank'>ToS</a></p>
                <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" aria-label="Confirmation" />
            </div>
            <div>
                <br> 
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>'
                <Button type="button" label="Create Account" severity="secondary" @click="CreateAccountClick()"></Button>'
                <Button type="button" label="login" @click="LoginClick()"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const checked = ref(false);

const openPDF = () => {
  window.open('../assets/TermsAndAgreements.pdf', '_blank');
}

const CreateAccountClick = () =>{
    console.log(password.value, Email.value)
    fetch('http://localhost:5198/CreateAccount/' + Email.value + '/' + password.value, {
    method: 'POST',
  })
  .then(response => {
    if (!response.ok) {
        if(response.status === 409){
            console.log("encountered 409 error")
        }
    }
    return response.json();
  })
  visible = false; 
}

const LoginClick = () =>{
    fetch('http://localhost:5198/VerifyPassword/' + Email.value + '/' + password.value, {
    method: 'GET',
  })
  .then(response => {
    if (!response.ok) {
        console.log(response.status)
        if(response.status === 409){
            
        }
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    });
    visible = false; 
  }
</script>