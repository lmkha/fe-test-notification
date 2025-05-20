'use client';

import { useFirebaseNotification } from "@/core/components/useFirebaseNotification";
import { requestPermission } from "@/core/logic/request-permission";
import { useEffect } from "react";

export default function Home() {

  useFirebaseNotification();


  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
      <h1>Test notification</h1>
    </>
  );
}
