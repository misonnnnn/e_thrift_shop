"use client"

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function show(){
    const { logout, isAdminLoggedIn } = useContext(AuthContext);

    if(!isAdminLoggedIn){
        redirect('/');
    }

    return (
        <>
            <div>this is admin page</div>
            <button onClick={logout}> logout </button>
        </>
    )
}