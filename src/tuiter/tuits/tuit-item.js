import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            "profilePhoto": "elonmusk.jpeg",
            "user": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "content": "Amazing show about @inspiration4x mission!",
            "image": "inspiration4x.jpeg",
            "title2": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content2": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ...",
            "link": " netflix.com",
            "comment": "4.2k",
            "share": "3.5k",
            "like": "37.5k"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" style={{"width": "50px"}} src={`/images/${post.avatarIcon}`} alt="..."/>
                </div>
                <div className="col-11 ps-4">
                    <div className="row">
                        <div className="row pe-0">
                            <div className="col-11">
                                <span className="fw-bolder">{post.userName} </span>
                                <i className=" bi bi-patch-check-fill" style={{color:"blue"}}></i>
                                <span className="text-secondary"> @{post.handle} · {post.time}</span>
                            </div>
                            <div className="col-1 pe-0">
                                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
                            </div>
                        </div>
                    </div>

                    <div>{post.tuit}</div>
                    <div className="row mt-3">
                        <div className="col-2">
                            <i className="bi bi-chat"></i><span className="ms-2">{post.replies}</span>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-repeat"></i><span className="ms-2">{post.retuits}</span>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({
                                ...post,
                                likes: post.likes + 1
                            }))} ></i>
                            {post.likes}
                        </div>
                        <div className="col-2">
                            <i className=" bi bi-hand-thumbs-down-fill me-2" onClick={() => dispatch(updateTuitThunk({
                                ...post,
                                dislikes: post.dislikes + 1
                            }))} ></i>
                            {post.dislikes}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-share"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TuitItem;