<script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
  import { Auth } from 'aws-amplify';

  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      // custom username
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();
      return Auth.signUp({
        username,
        password,
        attributes,
      });
    },
  };

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