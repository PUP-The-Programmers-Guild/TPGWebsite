import Link from "next/link"

interface INavLinkProps {
    name: string
    href: string
}

export default function NavLinkFilled(props:INavLinkProps) {
    return (
        <li className="nav-item">
            <Link
                className="group relative px-3 py-2 flex items-center text-xs uppercase rounded-lg font-bold leading-snug text-white bg-white bg-opacity-40 hover:bg-[#5C6D62] hover:bg-opacity-100"
                href={props.href}
            >
                {props.name}
            </Link>
        </li>
    )
}