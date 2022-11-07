import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const location = useLocation();
    const {pathname,search} = location;
    console.log(pathname,search);
    const parts = pathname.split('/')
    console.log(parts);
    return (
        <div className="list-group">
            <a href ="/#" className="list-group-item">Tuiter</a>
            <Link to ="/tuiter" href="#" className={`list-group-item ${parts.length <3 ?'active':''}`}><i className="bi bi-house-door-fill me-2"></i>Home</Link>
            <Link to ="/tuiter/explore" href="#" className={`list-group-item ${parts[2] === 'explore'?'active':''}`}><i className="bi bi-hash me-2"></i>Explore</Link>
            <Link to ="/" className="list-group-item"><i className="bi bi-asterisk me-2"></i>Labs</Link>
            <a href ="/#" className={`list-group-item ${parts[2] === 'notifications'?'active':''}`}><i className="bi bi-bell me-2"></i>Notifications</a>
            <a href ="/#" className={`list-group-item ${parts[2] === 'messages'?'active':''}`}><i className="bi bi-envelope me-2"></i>Messages</a>
            <a href ="/#" className={`list-group-item ${parts[2] === 'bookmarks'?'active':''}`}><i className="bi bi-bookmark me-2"></i>Bookmarks</a>
            <a href ="/#" className={`list-group-item ${parts[2] === 'lists'?'active':''}`}><i className="bi bi-card-list me-2"></i>Lists</a>
            <Link to ="/tuiter/profile" href="#" className={`list-group-item ${parts[2] === 'profile'?'active':''} || ${parts[2] === 'edit-profile'?'active':''}`}><i className="bi bi-person me-2"></i>Profile</Link>
            <a href ="/#" className={`list-group-item ${parts[2] === 'more'?'active':''}`}><i className="bi bi-three-dots me-2"></i>More</a>
        </div>
    );
}

export default NavigationSidebar;

