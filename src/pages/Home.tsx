import {Title} from "../assets/Title.tsx";
import {Link, Outlet} from "react-router-dom";

export function Home() {
    return (
        <>
            <Title text={'Home Page'}/>
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