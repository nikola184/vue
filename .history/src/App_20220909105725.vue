<script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>
<template>
  <authenticator>
    <!-- <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template> -->
    <router-link  to="https://www.google.com"></router-link>
    window.location.href = "https://example.com";
  </authenticator>
</template>