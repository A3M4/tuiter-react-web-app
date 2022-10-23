import React from 'react';

const PostItem = (
    {post2}
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" style={{"width": "57px"}} src={`/images/${post2.avatarIcon}`}
                         alt="..."/>
                </div>
                <div className="col-11 ps-4">
                    <div className="row">
                        <div className="row pe-0">
                            <div className="col-11">
                                <span className="fw-bolder">{post2.userName} </span>
                                <i className="bi bi-patch-check-fill"></i>
                                <span className="text-secondary"> @{post2.handle} - {post2.time}</span>
                            </div>
                        </div>
                    </div>
                    <div>{post2.content}</div>

                    <div className="card mt-2 rounded-4">
                        <img src={`/images/${post2.image}`} className="rounded-4" alt="..."/>
                        {post2.newTitle || post2.newsContent || post2.newsLink ?
                            <div className="card-body p-3">
                                {post2.newTitle ? <p className="card-text mb-0">{post2.newTitle}</p> : ""}
                                {post2.newsContent ? <p className="text-secondary mb-0">{post2.newsContent}</p> : ""}
                                {post2.newsContent ? <p className="text-secondary mb-0"></p> : ""}
                            </div>
                            : ""}
                    </div>

                    <div className="row mt-2">
                        <div className="col-3">
                            <a className="text-secondary text-decoration-none" href="/#"><i
                                className="bi bi-chat"></i><span className="ms-3">{post2.comment}</span></a>
                        </div>
                        <div className="col-3">
                            <a className="text-secondary text-decoration-none" href="/#"><i
                                className="bi bi-repeat"></i><span className="ms-3">{post2.share}</span></a>
                        </div>
                        <div className="col-3">
                            <a className="text-secondary text-decoration-none" href="/#"><i
                                className="bi bi-heart"></i><span className="ms-3">{post2.like}</span></a>
                        </div>
                        <div className="col-3">
                            <a className="text-secondary text-decoration-none" href="/#"><i
                                className="bi bi-upload"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default PostItem;