import React, { useEffect } from "react";
import { isAuth } from "../Actions/authAction";
import { useRouter } from "next/router";

export default function SuperAdminPrivate({ children }) {
  const router = useRouter();

  useEffect(
    () => {
      const auth = isAuth();
      if (!auth) {
        router.push("/login");
      } else if (auth.role !== "admin" && auth.role !== "super-admin") {
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
