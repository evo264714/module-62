import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return       <Spinner animation="grow" variant="dark" />

    }

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;

/*
* 1. Check user is logged in or not.
* 2. If user is logged in, then allow them to visit the route
* 3. Else, redirect the user to the login page
* 4. setup the private router
* 5. Handle Loading
* 



*/