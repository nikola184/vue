import { createApp } from 'vue'
import App from './App.vue'
import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';

// Amplify.configure(awsExports);

Amplify.configure({
  Auth: {

        
//          // REQUIRED - Amazon Cognito Region
          region: 'us-east-1',


// //         // OPTIONAL - Amazon Cognito User Pool ID
          userPoolId: 'us-east-1_NuXy1csoQ',

// //         // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
          userPoolWebClientId: '120uqiokg7ao7ri87r2cpfc2e8',

// //         // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
// //         mandatorySignIn: false,
        
// //         // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
// //         // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
// //         signUpVerificationMethod: 'code', // 'code' | 'link' 

// //         // OPTIONAL - Configuration for cookie storage
// //         // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
// //         // cookieStorage: {
// //         // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
// //         //     domain: '.yourdomain.com',
// //         // // OPTIONAL - Cookie path
// //         //     path: '/',
// //         // // OPTIONAL - Cookie expiration in days
// //         //     expires: 365,
// //         // // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
// //         //     sameSite: "strict" | "lax",
// //         // // OPTIONAL - Cookie secure flag
// //         // // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
// //         //     secure: true
// //         // },

// //         // OPTIONAL - customized storage object
// //       //  storage: MyStorage,
        
// //         // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
// //         authenticationFlowType: 'USER_SRP_AUTH',

// //         // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
// //      //   clientMetadata: { myCustomKey: '1234' },

// //          // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'https://sh-users-dev.auth.us-east-1.amazoncognito.com',
            scope: ['phone', 'email', 'openid'],
            redirectSignIn: 'https://spothopper-dev.herokuapp.com/',
            redirectSignOut: '',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});

function App() {
    const [user, setUser] = useState(null);
    const [customState, setCustomState] = useState(null);
  
    useEffect(() => {
      const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
          case "signIn":
            setUser(data);
            break;
          case "signOut":
            setUser(null);
            break;
          case "customOAuthState":
            setCustomState(data);
        }
      });
  
      Auth.currentAuthenticatedUser()
        .then(currentUser => setUser(currentUser))
        .catch(() => console.log("Not signed in"));
  
      return unsubscribe;
    }, []);

createApp(App).mount('#app')
