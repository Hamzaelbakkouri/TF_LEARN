import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie"

const Cookie = new Cookies();
const cooki = Cookie.get('login');

export const RequireAuth = (nextState, replace) => {
    const user = useSelector((state) => state.user.isLoggedIn)
    if (user) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    } else if (!cooki && cooki.role !== 0) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}