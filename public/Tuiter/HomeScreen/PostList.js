import posts from "./post.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        <ul class="list-group">
            ${posts.map(post => PostItem(post)).join('')}
        </ul>
    `);
}

export default PostList;