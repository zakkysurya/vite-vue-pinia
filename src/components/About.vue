<template>
  <h1>About</h1>
  <h5>Total User: {{ users.totalUsers }}</h5>
  <ul v-for="user in users.users">
    <li>{{ user.name }}</li>
    <li>{{ user.age }}</li>
  </ul>
</template>

<script setup>
import { useUserStore } from "@plugins/store/userStore";
const users = useUserStore();
</script>
