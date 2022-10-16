import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 position-relative">
                    <input class="ps-5 form-control rounded-pill wd-tuiter-search mt-1" placeholder="Search Tuiter"/>
                    <i class="fa-solid fa-magnifying-glass position-absolute wd-search-tuiter wd-search-color"></i>
                </div>
                <div class="col-1">
                    <i class="fa-solid fa-gear text-primary wd-explore-gear wd-search-tuiter-gear mt-1"></i>
                </div>
            </div>


            <ul class="nav nav-tabs mt-2 ">
                <li class="nav-item ">
                    <a class="nav-link wd-search-color active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-search-color" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-search-color" href="#">COVID-19</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-search-color" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-search-color" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-search-color" href="#">Entertainment</a>
                </li>
            </ul>
            
                        
                <img class="w-100 wd-content-border mt-2 mb-2"
                     src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
             
                
           
            
            
            
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
