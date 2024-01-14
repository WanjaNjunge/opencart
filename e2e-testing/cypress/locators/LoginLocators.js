const LoginLocators = {
    accountBtn: '[:nth-child(2) > .dropdown]',
    loginModal: '[:nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item]',
    emailInput: '[#input-email]',
    passwordInput: '[#input-password]',
    loginButton: '[#form-login > .text-end > .btn]',
    logoutButton: '[.list-group > [href="http://localhost/en-gb?route=account/logout"]]',
    errorMessage: '[.alert]',
  };
  
  export default LoginLocators;