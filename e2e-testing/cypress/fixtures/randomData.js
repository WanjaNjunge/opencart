// Function to generate a random string of a given length
const generateRandomString = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  // Function to generate random user data
  const generateRandomUserData = () => {
    const firstName = generateRandomString(8);
    const lastName = generateRandomString(10);
    const email = `${generateRandomString(10)}@example.com`;
    const password = generateRandomString(12);
  
    return {
      firstName,
      lastName,
      email,
      password,
    };
  };
  
  module.exports = {
    generateRandomUserData,
  };