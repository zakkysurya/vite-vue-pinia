<template>
  <h1>Dashboard</h1>
  <h5>Total User: {{ users.totalUsers }}</h5>
  <ul v-for="user in users.users">
    <li>{{ user.name }}</li>
    <li>{{ user.age }}</li>
  </ul>
  <br />
  <form @submit.prevent="saveUser">
    <input type="text" v-model="users.tempUser.name" placeholder="Name..." />
    <br />
    <br />
    <input type="number" v-model="users.tempUser.age" placeholder="Age..." />
    <button type="submit">Save</button>
  </form>
</template>

<script setup>
import { useUserStore } from "@plugins/store/userStore";
const users = useUserStore();

const saveUser = () => {
  users.addUser();
};
</script>
