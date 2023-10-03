import './Navigation.css';
import {NavLink} from "react-router-dom";
import logo from "../assets/logo-white.png";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <img src={logo} className="navlogo" alt="Company logo"/>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/newpost" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Nieuw bericht</NavLink></li>
                    <li><NavLink to="/overview" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle berichten</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation