"use client"

import "./../../css/products.css";
import Products from '../../../components/Products';
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function show(){
    const { isAdminLoggedIn } = useContext(AuthContext);

    if(isAdminLoggedIn){
        notFound();
    }

    return (
        <Products section="sale" />
    )
}