
const isAuthenticated = () => {

  return (localStorage.getItem('key_token_login')) ? true : false;
};

export default isAuthenticated;