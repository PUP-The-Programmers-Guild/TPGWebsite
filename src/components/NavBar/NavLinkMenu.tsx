import Link from "next/link";
import { ReactNode, ReactElement } from "react"
import Tooltip from "../Tooltip"
const NavLinkMenu = ({children} : {children: ReactNode[] | ReactNode}) => {
    return (
        <Tooltip>
            {children}
        </Tooltip>
    )
}

interface ILinkMenuItemProps {
    href: string;
    children: ReactElement<string> | string
}

const Item = (props: ILinkMenuItemProps) => {
    return (
        <Link href={props.href} className="group z-60 text-xs font-normal leading-none">
            <div className="hover:text-green-400 mx-auto my-2">
                <span>
                    {props.children}
                </span>
            </div>
        </Link>
    )
}

NavLinkMenu.Item = Item;
export default NavLinkMenu;
