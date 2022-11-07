import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2] ? paths[2] : 'home';
    return (
        <div className="list-group">
            <li className="list-group-item "><i className="bi bi-twitter"></i></li>

            <Link to="/tuiter/home"
                  className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-door-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Home</span>
            </Link>

            <Link to="/tuiter/explore"
                  className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash me-2"></i>
                <span className="d-none d-xl-inline-block"> Explore</span>
            </Link>

            <Link to="/" className="list-group-item">
                Labs
            </Link>

            <a href="/#" className={`list-group-item list-group-item-action ${active === 'notification' ? 'active' : ''}`}>
                <i className="bi bi-bell-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Notifications</span>
            </a>

            <a href="/#" className={`list-group-item list-group-item-action ${active === 'message' ? 'active' : ''}`}>
                <i className="bi bi-envelope-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Messages</span>
            </a>

            <a href="/#" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="bi bi-bookmark-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Bookmarks</span>
            </a>

            <a href="/#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-ul me-2"></i>
                <span className="d-none d-xl-inline-block"> Lists</span>
            </a>

            <Link to="/tuiter/profile"
                  className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'profile' : ''}`}>
                <i className="bi bi-person-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Profile</span>
            </Link>

            <a href="/#" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots me-2"></i>
                <span className="d-none d-xl-inline-block"> More</span>
            </a>

        </div>
    );
}

export default NavigationSidebar;