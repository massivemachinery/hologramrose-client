export {};

declare global {
  interface Window {
    env: {
      APP_ENV: string;
      API_SERVER: string;
      INTERCOM_APP_ID: string;
    };
  }
}

const rootUrl = `${location.protocol}//${location.host}`;

const envs = {
  // Production
  'https://hologramrose.io': {
    APP_ENV: 'production',
    API_SERVER: 'https://api.hologramrose.io',
    INTERCOM_APP_ID: '-- TBD --',
  },

  // Staging
  'https://staging.hologramrose.io': {
    APP_ENV: 'staging',
    API_SERVER: 'https://hologramrose-staging.herokuapp.com',
    INTERCOM_APP_ID: 'dtk4r15f',
  },

  // Development
  'http://localhost:3000': {
    APP_ENV: 'development',
    API_SERVER: 'http://localhost:4000',
    INTERCOM_APP_ID: 'dtk4r15f',
  },
};

if (envs[rootUrl]) {
  // Set environment variables based on the URL the app is being accessed from
  window.env = envs[rootUrl];
} else {
  // Redirect to production if the rootUrl is unknown
  window.location.replace(Object.keys(envs)[0]);
}
