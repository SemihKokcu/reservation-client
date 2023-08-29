class APIConfig {
    static ENVIRONMENT = {
      ADMINPROD: {
        backendUrl: 'http://localhost:8080/api',
      },
    }
    static SELECTED_ENVIRONMENT = this.ENVIRONMENT.ADMINPROD
  
    static LOGIN_SVC = '/auth/authenticate'
    static REGİSTER_SVC = '/auth/register'
    static CHECK_AUTH_SVC = '/auth/check-auth';
  }
  
  export default APIConfig
  