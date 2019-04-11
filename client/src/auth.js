 const isAuthenticated = {
  
  userAuth : false,
  verifyAuth(){
    this.userAuth = (localStorage.getItem('key_token_login'));
  }
  
 };

export default isAuthenticated;