<!-- <script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      
      

      <button @click="signOut">Sign Out</button>
    </template> -->

<script setup>
  import '@aws-amplify/ui-vue/styles.css';
      import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
      const auth = useAuthenticator();
</script>
    
<template>
  <authenticator></authenticator>
      <template v-if="auth.authStatus === 'configuring'">
        <button @click="auth.signOut">Loading...</button>
      </template>

      <template v-if="auth.authStatus === 'authenticated'">
       
        
        <button @click="auth.signOut">Sign out</button>
      </template>
      
</template>


    

   
  
