export const environment = {
    production: false,
    amplify: {
        domain: 'https://sh-users-dev.auth.us-east-1.amazoncognito.com',
        aws_cognito_region: 'ap-east-1',
        aws_user_pools_id: 'ap-southeast-1_XXXXX',
        aws_user_pools_web_client_id: '120uqiokg7ao7ri87r2cpfc2e8'
    },
  
    oauth: {
      // Authorized scopes
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      // Callback URL
      redirectSignIn: 'http://localhost:4200',
  
      // Sign out URL
      redirectSignOut: 'http://localhost:4200',
  
      // 'code' for Authorization code grant,
      responseType: 'code',
  
      // optional, for Cognito hosted ui specified options
      options: {
        // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
        AdvancedSecurityDataCollectionFlag: false,
      },
    }
  };