import axios from "axios";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

// Define the encryption key and data to be encrypted
const encryptionKey = "my-secret-key";

// set Cookies for login User
export const setLoginCookies = (key, value) => {
  Cookies.set(key, value, { expires: 1 });
};

export const getLoginCookies = (key) => {
  return Cookies.get("jwt");
};

// set token in LocalStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const authenticate = (data, cb) => {
  const userData = JSON.stringify(data.user);

  // Encrypt the data using AES encryption
  const encryptedData = CryptoJS.AES.encrypt(
    userData,
    encryptionKey
  ).toString();
  console.log("Encrypted user data:", encryptedData);
  setLocalStorage("user", encryptedData);
  setLoginCookies("jwt", data.token);

  cb();
};

// DESTRUCTURE Encipted DATA
export const getEncryptedData = (encryptedUserData) => {
  try {
    if (encryptedUserData) {
      const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      const userData = JSON.parse(decryptedData);
      return userData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// Authentication
export const isAuth = () => {
  if (process.browser) {
    const cookichecked = getLoginCookies("jwt");
    if (cookichecked) {
      if (localStorage.getItem("user")) {
        return getEncryptedData(JSON.parse(localStorage.getItem("user")));
      } else {
        return false;
      }
    }
  }
};

// Signup Api
export const singUpNewAccount = async (data) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/user/super-admin-register",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("step-3");
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// LOGIN
export const loginAccount = async (clData) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/user/super-admin-login",
      clData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    return error.response;
  }
};

// admin LOGIN
export const adminLogin = async (clData) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/user/admin-login",
      clData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    return error.response;
  }
};

// Log Out
export const singOut = (next) => {
  removeCookies("jwt");
  localStorage.removeItem("user");
  next();
};

// Remove Cookies
export const removeCookies = (kay) => {
  Cookies.remove(kay);
};
