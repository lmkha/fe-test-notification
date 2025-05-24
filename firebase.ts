import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCh6K1dFUqfMbzA1A2jiHbCrc1aXz0yo1s",
    authDomain: "notificationservicefcm-1e60f.firebaseapp.com",
    projectId: "notificationservicefcm-1e60f",
    storageBucket: "notificationservicefcm-1e60f.firebasestorage.app",
    messagingSenderId: "989490054728",
    appId: "1:989490054728:web:1f29bea164ad9f4218fa7d",
    measurementId: "G-BEC4ZK8GTN"
};

const app = initializeApp(firebaseConfig);
const messaging = isSupported().then((supported) => {
    return supported ? getMessaging(app) : null;
});

export { messaging };
