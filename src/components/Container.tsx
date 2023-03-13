import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Container({children} : {children: ReactNode[] | ReactNode}) {
    return (
        <>
            <Header/>
            <div className="z-100 min-h-[100vh]">
                {children}
            </div>
            <Footer/>
        </>
    )
}