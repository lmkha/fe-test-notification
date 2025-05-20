// public/firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCvHMFoZrZZOw9b6eBRoLOWfajUQ0eYN84",
    authDomain: "visara-notification.firebaseapp.com",
    projectId: "visara-notification",
    storageBucket: "visara-notification.firebasestorage.app",
    messagingSenderId: "281680746888",
    appId: "1:281680746888:web:a8f670a55e99554726c23d",
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
