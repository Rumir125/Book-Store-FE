import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { decodeToken, isExpired } from "react-jwt";
import { useDispatch } from "react-redux";
import {
  setAuthorized as setReduxAuthorized,
  setUser,
} from "../features/user/userSlice";

// import { userService } from "services";

export { RouteGuard };

function RouteGuard({ children }: any) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
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
    const decodedToken: any = decodeToken(token);
    dispatch(setReduxAuthorized(!isExpired(token)));
    dispatch(
      setUser(
        !isExpired(token)
          ? { userId: decodedToken.id, username: decodedToken.username }
          : {}
      )
    );

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
