import { useUserContext } from "app/user.context";
import Router from "next/router";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function useUser({
    whenFoundRedirectTo = "",
    whenNotFoundRedirectTo = ""
} = {}) {
    const { data, error } = useFetch("/api/user");
    const { dispatch, user } = useUserContext();
    const [routerPushIsCalled, setRouterPushIsCalled] = useState(false);

    useEffect(() => {
        // if no redirect is specified, do nothing
        if ((!whenFoundRedirectTo && !whenNotFoundRedirectTo) || (!data && !error)) return;

        if (data) {
            dispatch({ type: "set user", payload: data.data });
        }

        // prevents calling router.push multiple times
        if (routerPushIsCalled) return;

        if (data && whenFoundRedirectTo) {
            Router.push(whenFoundRedirectTo);
        }
        else if (error && whenNotFoundRedirectTo) {
            Router.push(whenNotFoundRedirectTo);
        }
        setRouterPushIsCalled(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, data]);

    return { user, error, dispatch };
}