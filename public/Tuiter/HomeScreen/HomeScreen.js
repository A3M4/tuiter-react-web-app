import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "./PostList.js";

function homeScreen() {
    $('#wd-home').append(`
       <div class="row mt-2">
           <div class="col-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
           </div>
           <div class="col-10 col-lg-6 col-xl-6">
                ${PostList()}     
           </div>
           <div class="d-none d-lg-block col-lg-5 col-xl-4">
                ${PostSummaryList()}
           </div>
       </div>
   `);
}

$(homeScreen);