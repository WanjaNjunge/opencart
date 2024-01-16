const RegisterLocators = {
    accountBtn: ':nth-child(2) > .dropdown > .dropdown-toggle > .fa-caret-down',
    registerModal: ':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item',
    firstNameInput: '#input-firstname',
    lastNameInput: '#input-lastname',
    emailInput: '#input-email',
    passwordInput: '#input-password',
    newsletterToggle: '#input-newsletter',
    privacyToggle: "input[value='1'][name='agree']",
    continueButton: "button[type='submit']",
    logoutButton: 'body main a:nth-child(13)',
    errorMessage: '[.alert]',
  };
  
  export default RegisterLocators;