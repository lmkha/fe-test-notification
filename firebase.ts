import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCvHMFoZrZZOw9b6eBRoLOWfajUQ0eYN84",
    authDomain: "visara-notification.firebaseapp.com",
    projectId: "visara-notification",
    storageBucket: "visara-notification.firebasestorage.app",
    messagingSenderId: "281680746888",
    appId: "1:281680746888:web:a8f670a55e99554726c23d"
};

const app = initializeApp(firebaseConfig);
const messaging = isSupported().then((supported) => {
    return supported ? getMessaging(app) : null;
});

export { messaging };
