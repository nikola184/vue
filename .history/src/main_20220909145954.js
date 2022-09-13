import { createApp } from 'vue'
import App from './App.vue'
// import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import { Auth } from 'aws-amplify';

Auth.configure({
    // other configurations
    // ...
    authenticationFlowType: 'CUSTOM_AUTH'
});

// Amplify.configure(awsExports);

createApp(App).mount('#app')
