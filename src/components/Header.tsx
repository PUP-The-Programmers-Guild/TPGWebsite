import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavBar/NavLink";
import NavLinkFilled from "./NavBar/NavLinkFilled";
import TPGLogo from "../../public/TPGLogoLarge.png";
import Link from "next/link";

const NAVLINKS = [
    {
        name: "Home",
        href: "/", 
        sublinks: []
    },
    {
        name: "About Us",
        href: "/about",
        sublinks: [
            {name: "Description and Brief History", href: "/about"},
            {name: "Mission and Values", href: "/about#mission"},
            {name: "People", href: "/about#people"},
        ]
    },
    {
        name: "News",
        href: "/news",
        sublinks: []
    },
    {
        name: "Contact Us",
        href: "/contact",
        sublinks: []
    },
]

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-0.5 py-1 bg-neutral-500 mb-3">
                <div className="container px-12 mx-auto flex flex-wrap items-center justify-between">
                    <Image src={TPGLogo} alt="TPG" width="50" height="50"/>
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link className="text-sm font-bold leading-none inline-block mr-4 py-2 whitespace-nowrap text-white" href="/">
                            <span>The <br/> <span>Programmers&apos; Guild</span> </span> {/* Small "The" */}
                        </Link>
{/*                         <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button> */}
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="NavBar"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {NAVLINKS.map((link) => (
                                <NavLink name={link.name} href={link.href} key={`NAVLINK-${link.name}`} sublinks={link.sublinks}/>
                            ))}
                            <div className="ml-3">
                                <NavLinkFilled name="Be a Devskolar" href="/register"/>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

