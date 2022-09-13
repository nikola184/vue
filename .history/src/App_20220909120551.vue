<script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>
<template>
  <authenticator>
    <template v-slot="{ user, signOut,code, signIn }">
      <h1>Hello {{ user.username }}!</h1>
      {{user.code}}
      {{code}}
      {{signOut}}
      {{signIn}}

      <button @click="signOut">Sign Out</button>
    </template>
    
   
  </authenticator>
</template>