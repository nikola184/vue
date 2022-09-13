<script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
  import { Auth } from 'aws-amplify';

 
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      
      {{services.username}}

      <button @click="signOut">Sign Out</button>
    </template>
    
   
  </authenticator>
</template>