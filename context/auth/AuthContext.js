import {createContext} from "react";

const contextProps = {
    isLoggedIn: false,
    user: {},

}

export const AuthContext = createContext({...contextProps})