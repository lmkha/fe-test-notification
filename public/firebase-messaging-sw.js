// public/firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCh6K1dFUqfMbzA1A2jiHbCrc1aXz0yo1s",
    authDomain: "notificationservicefcm-1e60f.firebaseapp.com",
    projectId: "notificationservicefcm-1e60f",
    storageBucket: "notificationservicefcm-1e60f.firebasestorage.app",
    messagingSenderId: "989490054728",
    appId: "1:989490054728:web:1f29bea164ad9f4218fa7d",
    measurementId: "G-BEC4ZK8GTN",

});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Background message received:", payload);

    const notificationTitle = payload.notification.title || "Thông báo";
    const notificationOptions = {
        body: payload.notification.body || "",
        icon: "/icon.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
