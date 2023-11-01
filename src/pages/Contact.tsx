import {Title} from "../assets/Title.js";
import {Link, Outlet} from "react-router-dom";

export function Contact() {
    return (
        <>
            <Title text={'Contact Page'}/>
            <nav>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}