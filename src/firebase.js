// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCp-4nReChV4OOHjy5ps-DqDH5lK-dTEE",
  authDomain: "my-project-318dc.firebaseapp.com",
  projectId: "my-project-318dc",
  storageBucket: "my-project-318dc.appspot.com",
  messagingSenderId: "299115253491",
  appId: "1:299115253491:web:b5cf5c6a5f9668d37ef186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app