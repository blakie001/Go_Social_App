import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: {"_id":{"$oid":"62b99d844c400d555b89a0af"},"username":"ram","email":"ram","password":"$2a$10$WdFfcj4ZNv6wLy2X/H/pFe1ojw6g01fxzQjSPj8GT.jQWYI1DwLsm","profilePicture":"person/1.jpeg","coverPicture":"","followers":[],"following":["62b99d914c400d555b89a0b1","62b99e104c400d555b89a0b7","62bd7c5e5cae8d776a95d506"],"isAdmin":false,"createdAt":{"$date":{"$numberLong":"1656331652805"}},"updatedAt":{"$date":{"$numberLong":"1656331815049"}},"__v":{"$numberInt":"0"},"description":"ram ki bio"},
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}

        >
            {children}
        </AuthContext.Provider>
    );
};
