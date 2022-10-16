const NavigationSidebar = (active) => {
    return(`
                <div class="list-group">
               
                <a class="list-group-item "><i class="fa-brands fa-twitter"></i></a>
                    
                <a href="#" class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}">
                    <i class="fa-solid fa-house-chimney text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> Home</span>
               
                <a href="#" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}">
                    <i class="fa-solid fa-hashtag text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active === 'Notifications' ? 'active' : ''}">
                    <i class="fa-solid fa-bell text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active === 'Messages' ? 'active' : ''}">
                    <i class="fa-solid fa-envelope text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active === 'Bookmarks' ? 'active' : ''}">
                    <i class="fa-solid fa-bookmark text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active === 'Lists' ? 'active' : ''}">
                    <i class="fa-solid fa-list text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> Lists</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active === 'Profile' ? 'active' : ''}">
                    <i class="fa-solid fa-user text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active === 'More' ? 'active' : ''}">
                    <i class="fa-solid fa-comment-dots text-white"></i>
                    <span class="d-none d-xl-inline-block text-white"> More</span>
                </a>
            </div>
            <button class="btn btn-primary w-100 mt-1 rounded-pill">Tweet</button>
 `);
}
export default NavigationSidebar;