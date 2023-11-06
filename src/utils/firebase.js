// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvwpGqGw-pERNf2KsmG4oSj36u-J1ZJM0',
  authDomain: 'netflixgpt-9e4af.firebaseapp.com',
  projectId: 'netflixgpt-9e4af',
  storageBucket: 'netflixgpt-9e4af.appspot.com',
  messagingSenderId: '567397638280',
  appId: '1:567397638280:web:946381495e55771debbf3d',
  measurementId: 'G-KEDG2RRCDM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
