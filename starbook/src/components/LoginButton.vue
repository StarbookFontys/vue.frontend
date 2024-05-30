<template>
    <div class="card flex justify-content-center">
        <Button id="AccountManagement" label="Account management" @click="visible = true"/>
        <Dialog v-model:visible="visible" modal header="Please fill in your login information or create an account first" :style="{ width: '25rem' }">
            <div v-if="loginSuccess" class="flex align-items-center gap-3 mb-3"> 
                <label id="LoginLabel" style="color: red" class="font-bold w-6rem">Logged in successfully, welcome {{ userEmail }}</label>
            </div>
            <div v-if="AccountCreationSuccess" class="flex align-items-center gap-3 mb-3"> 
                <label style="color: red" class="font-bold w-6rem">Successfully created an account!</label>
            </div>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="email " class="font-semibold w-6rem">Email</label>
                <InputText id="EmailText" class="flex-auto" v-model="email" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="password" class="font-semibold w-6rem">Password</label>
                <InputText type="Password" id="PasswordText" class="flex-auto" v-model="password" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3">
                <p>I agree with the <a href='./TermsAndAgreements.pdf' target='_blank'>ToS</a></p>
                <ToggleButton id="ToSButton" v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" aria-label="Confirmation" />
            </div>
            <div>
                <br> 
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>'
                <Button type="button" label="Create Account" severity="secondary" @click="CreateAccountClick()"></Button>'
                <Button id="LoginButton" type="button" label="login" @click="LoginClick()"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const checked = ref(false);
const loginSuccess = ref(false);
const AccountCreationSuccess = ref(false);
const email = ref('');
const password = ref('');
const userEmail = ref('');

const CreateAccountClick = () =>{
    console.log(password.value, Email.value)
    fetch('http://localhost:5198/CreateAccount/' + email.value + '/' + password.value, {
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
  visible.value = false; 
}

const decodeJWT = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}


const LoginClick = () =>{
    fetch('http://localhost:5198/VerifyPassword/' + email.value + '/' + password.value, {
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
    console.log(data);
    const decodedToken = decodeJWT(data.jwtToken);
    userEmail.value = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    console.log(userEmail.value);
    loginSuccess.value = true; // Show the success message
    //visible.value = false; // Close the dialog
  })
  }
</script>