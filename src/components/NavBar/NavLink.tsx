import Link from "next/link";
import Tooltip from "../Tooltip"
import NavLinkMenu from "./NavLinkMenu"

interface ILinkProps {
    name: string;
    href: string;
}

interface INavLinkProps extends ILinkProps {
    sublinks: ILinkProps[];
}

export default function NavLink(props:INavLinkProps) {
    return (
        <li className="nav-item">
            <div
                className="group relative px-3 py-2 flex items-center text-xs leading-snug text-white hover:text-green-400 hover:drop-shadow-lg hover:shadow-black"
            >
                <Link href={props.href} className="font-bold">{props.name}</Link>
                {props.sublinks.length > 0 ? 
                    <NavLinkMenu>
                        {props.sublinks.map((item, key) => {
                            return (
                                key < props.sublinks.length - 1 ?
                                <>
                                    <NavLinkMenu.Item href={item.href}>{item.name}</NavLinkMenu.Item>
                                    <hr className="h-[0.0625rem] mb-0.5 bg-white border-0"/>
                                </> :
                                <>
                                    <NavLinkMenu.Item href={item.href}>{item.name}</NavLinkMenu.Item>
                                </>
                            )
                        })}
                    </NavLinkMenu> :
                    <>
                    </>
                }
            </div>
        </li>
    )
}