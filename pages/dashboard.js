import React from "react";
import { useAuth } from "../context/AuthContext";

const dashboard = () => {
    const currentUser = useAuth()
    console.log(currentUser)

    return ( 
        <div>Hello </div>
    );
}
 
export default dashboard;