import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authChecker } from "../shared/authChecker";


const RequireAuth = ({ protectedPath, children }) => {
    const location = useLocation();
    let isAuthenticated = authChecker();
    let url = `/login?redirectUrl=${location?.pathname}`;
    if (isAuthenticated && location?.pathname === '/login') {
        url = '/';
        protectedPath = true;
        isAuthenticated = false;
    }


    return (
        <div>
            {protectedPath ? (
                <>
                    {isAuthenticated ? (
                        children
                    ) : (
                        <Navigate replace to={url} />
                    )}
                </>
            ) : (
                children
            )}
        </div>
    );
};

export default RequireAuth;
