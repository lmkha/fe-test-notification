// lib/request-permission.ts
import { getToken } from "firebase/messaging";
import { messaging } from "../../../firebase";

const VAPID_KEY = process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY

export const requestPermission = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const msg = await messaging;
            if (!msg) {
                console.warn("FCM not supported on this browser.");
                return;
            }

            const token = await getToken(msg, { vapidKey: VAPID_KEY });
            console.log("FCM Token:", token);

            // Gửi token này về server để lưu lại
        } else {
            console.log("Notification permission denied");
        }
    } catch (err) {
        console.error("Error getting FCM token", err);
    }
};
