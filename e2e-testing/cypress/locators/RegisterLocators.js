const RegisterLocators = {
    accountBtn: '[:nth-child(2) > .dropdown > .dropdown-toggle > .fa-caret-down]',
    registerModal: '[:nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item]',
    firstNameInput: '[#input-firstname]',
    lastNameInput: '[#input-lastname]',
    emailInput: '[#input-email]',
    passwordInput: '[#input-password]',
    newsletterToggle: '[#input-newsletter]',
    privacyToggle: '[.text-end > .form-check > .form-check-input]',
    continueButton: '[.text-end > .btn]',
    logoutButton: '[.list-group > [href="http://localhost/en-gb?route=account/logout"]]',
    errorMessage: '[.alert]',
  };
  
  export default RegisterLocators;