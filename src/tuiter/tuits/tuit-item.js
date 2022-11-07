import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (
    {
        post = {
            "avatarIcon": "elonmusk.jpeg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "content": "Amazing show about @inspiration4x mission!",
            "image": "inspiration4x.jpeg",
            "newTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "newsContent": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ...",
            "newsLink": "netflix.com",
            "replies": "4.2k",
            "retuits": "3.5k",
            "likes": "37.5k"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" style={{"width": "45px"}} src={`/images/${post.avatarIcon}`} alt="..."/>
                </div>
                <div className="col-11 ps-4">
                    <div className="row">
                        <div className="row pe-0">
                            <div className="col-11">
                                <span className="fw-bolder">{post.userName}</span>
                                <i className="bi bi-patch-check-fill"></i>
                                <span className="text-secondary"> @{post.handle} - {post.time}</span>
                            </div>
                            <div className="col-1 pe-0">
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(post._id)}></i>
                            </div>
                        </div>
                    </div>
                    <div>{post.tuit}</div>


                    {(post.image || post.newTitle || post.newsContent || post.newsLink) &&
                        <div className="card mt-2 border border-secondary rounded-4">
                            {post.image && <img src={`/images/${post.image}`} className="card-img-top rounded-4" alt="..." />}
                            {post.newTitle || post.newsContent || post.newsLink ?
                                <div className="card-body border-top border-secondary p-3">
                                    {post.newTitle ? <p className="card-text mb-0">{post.newTitle}</p> : ""}
                                    {post.newsContent ? <p className="text-secondary mb-0">{post.newsContent}</p> : ""}
                                    {post.newsContent ? <p className="text-secondary mb-0"><i className="fa-solid fa-link"></i>${post.newsLink}</p> : ""}
                                </div>
                                : ""}
                        </div>
                    }

                    <div className="row mt-3">
                        <div className="col-3">
                            <i className="bi bi-chat"></i><span className="ms-2">{post.replies}</span>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-repeat"></i><span className="ms-2">{post.retuits}</span>
                        </div>
                        <div className="col-3">
                            {post.liked? <i className="bi bi-heart-fill text-danger"></i>: <i className="bi bi-heart"></i>}
                            <span className="ms-2">{post.likes}</span>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-upload"></i>
                        </div>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default TuitItem;