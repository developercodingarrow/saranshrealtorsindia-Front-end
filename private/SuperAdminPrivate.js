import React, { useEffect } from "react";
import { isAuth } from "../Actions/authAction";
import { useRouter } from "next/router";

export default function SuperAdminPrivate({ children }) {
  const router = useRouter();

  useEffect(
    () => {
      if (!isAuth()) {
        router.push("/login");
      } else if (isAuth().role !== "super-admin") {
        router.push("/login");
      }
    },
    [isAuth()],
    router
  );
  return (
    <>
      <div>{children}</div>
    </>
  );
}
