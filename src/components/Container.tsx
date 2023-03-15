import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Container({children} : {children: ReactNode[] | ReactNode}) {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}