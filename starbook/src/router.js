import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LoginButton from "./components/LoginButton.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: App },
            {
                path: "/", component: LoginButton
            }]
}); 