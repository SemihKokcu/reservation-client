class APIConfig {
    static ENVIRONMENT = {
      ADMINPROD: {
        backendUrl: 'http://localhost:8080/api',
      },
    }
    static SELECTED_ENVIRONMENT = this.ENVIRONMENT.ADMINPROD
  
    static LOGIN_SVC = '/auth/authenticate'
    static REGİSTER_SVC = '/register'
  }
  
  export default APIConfig
  