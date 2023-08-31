class APIConfig {
    static ENVIRONMENT = {
      ADMINPROD: {
        backendUrl: 'http://localhost:8080/api',
      },
    }
    static SELECTED_ENVIRONMENT = this.ENVIRONMENT.ADMINPROD
  
    // auth endpoint
    static LOGIN_SVC = '/auth/authenticate'
    static REGİSTER_SVC = '/auth/register'
    static CHECK_AUTH_SVC = '/auth/check-auth';


    //reservations endpoint
    static ADD_RESERVATİON = '/reservation/add';
    static GET_ALL_RESERVATİON = '/reservation/getall';
    static GET_BY_ID_RESERVATİON = '/reservation/get/';
    static DELETE_RESERVATİON = '/reservation/delete/';
    static UPDATE_RESERVATİON = '/reservation/update';
    static GET_ALL_RESERVATİON_BY_USER = '/reservation/getAll/byUser';
  }
  
  export default APIConfig
  