<template>
  <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
  <router-link :to="{ name: 'home' }">Home</router-link> |
  <router-link :to="{ name: 'about' }">About</router-link> |
  <router-link :to="{ name: 'contact' }">Contact</router-link>
  <br />
  <router-view></router-view>
</template>

<script setup></script>
