<script setup>
  import { Authenticator,useAuthenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
  const auth = useAuthenticator();
</script>

<template>
  <authenticator>
    <!-- <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.confirmation_code }}!</h1>
      
      

      <button @click="signOut">Sign Out</button>
    </template> -->



<template>
  <authenticator></authenticator>
  <template v-if="auth.route === 'authenticated'">
    <button @click="auth.signOut">Sign out</button>
  </template>
</template>
    
   
  </authenticator>
</template>