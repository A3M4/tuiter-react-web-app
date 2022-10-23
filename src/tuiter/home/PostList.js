import React from 'react';
import postsArray from "./post.json";
import PostItem from "./PostItem";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                postsArray.map(post1 => <PostItem post2={post1}/>)
            }
        </ul>
    )
}

export default PostList;