import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { isExpired } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorized as setReduxAuthorized } from "../features/user/userSlice";

// import { userService } from "services";

export { RouteGuard };

function RouteGuard({ children }: any) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  // const isAuthorized = useSelector((state: any) => state.user.authorized);
  const dispatch = useDispatch();

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/users/signin", "/", "/users/create"];
    const path = url.split("?")[0];
    const token = localStorage.getItem("jwtToken") || "";
    dispatch(setReduxAuthorized(!isExpired(token)));
    if (isExpired(token) && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "users/signin",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}