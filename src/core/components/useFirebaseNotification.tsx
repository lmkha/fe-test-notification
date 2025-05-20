import { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { messaging } from "../../../firebase";

export const useFirebaseNotification = () => {
    useEffect(() => {
        messaging.then((msg) => {
            if (!msg) return;

            const unsubscribe = onMessage(msg, (payload) => {
                console.log("Foreground Notification:", payload);

                const title = payload.notification?.title ?? "Notification";
                const body = payload.notification?.body ?? "";

                alert(`${title}\n${body}`);
            });

            return () => unsubscribe();
        });
    }, []);
};
