import React from 'react';
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "react-blue.jpeg"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row pb-2">
                <div className="col-9">
                    <div className="text-secondary">
                        {post.topic}
                    </div>
                    <div className="fw-bolder">
                        {post.userName} <i className="fa-solid fa-circle-check"></i><span
                        className="text-secondary"> - {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                </div>
                <div className="col-3">
                    <img className="float-end rounded" height={100}
                         src={`/images/${post.image}`} alt={post.image}/>
                </div>
            </div>
        </li>
    )
}

export default PostSummaryItem;