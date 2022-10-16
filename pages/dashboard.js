import { router } from "next/router";
import React from "react";
import { useAuth } from "../context/AuthContext";

const dashboard = () => {
    const currentUser = useAuth()
    console.log(currentUser)
    if(!currentUser.isAuthenticated){
        router.push('/login')
    }
    return ( 
        <div>Hello </div>
    );
}
 
export default dashboard;