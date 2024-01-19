const LoginLocators = {
    accountBtn: ':nth-child(2) > .dropdown > .dropdown-toggle > .fa-caret-down',
    loginModal: ':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item',
    emailInput: '#input-email',
    passwordInput: '#input-password',
    loginButton: '#form-login > .text-end > .btn',
    logoutButton: "li[class='list-inline-item'] li:nth-child(5) a:nth-child(1)",
    invalidCredentials: ".alert.alert-danger.alert-dismissible",
    errorMessage: '.alert',
  };
  
  export default LoginLocators;