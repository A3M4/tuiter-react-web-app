// import React from 'react';
//
// const PostItem = (
//     {
//         post = {
//             "profilePhoto": "elonmusk.jpeg",
//             "user": "Elon Musk",
//             "handle": "elonmusk",
//             "time": "23h",
//             "content": "Amazing show about @inspiration4x mission!",
//             "image": "inspiration4x.jpeg",
//             "title2": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
//             "content2": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ...",
//             "link": " netflix.com",
//             "comment": "4.2k",
//             "share": "3.5k",
//             "like": "37.5k"
//         }
//     }
// ) => {
//     return(
//         <li className="list-group-item">
//             <div className="row">
//                 <div className="col-1">
//                     <img className="rounded-circle" style={{"width": "45px"}} src={`/images/${post.profilePhoto}`} alt="..."/>
//                 </div>
//                 <div className="col-11 ps-4">
//                     <div className="row">
//                             <div className="col-11">
//                                 <span><b>{post.user} </b></span>
//                                 <i className="bi bi-patch-check-fill" style={{color:"deepskyblue"}}></i>
//                                 <span className="text-secondary"> @{post.handle} - {post.time}</span>
//                             </div>
//                             <div className="col-1">
//                                 <span className="text-secondary fw-bolder float-end">...</span>
//                             </div>
//                     </div>
//                     <div>{post.content}</div>
//                     <div className="rounded-3 mt-2">
//                         <img src={`/images/${post.image}`} className="card-img-top rounded-3" alt="..."/>
//                         {post.title2 || post.content2 || post.link ?
//                             <div className=" border-secondary p-3">
//                                 {post.title2 ? <p className="card-text mb-0">{post.title2}</p> : ""}
//                                 {post.content2 ? <p className="text-secondary mb-0">{post.content2}</p> : ""}
//                                 {post.content2 ? <p className="text-secondary mb-0"><i className="bi bi-link-45deg"></i>{post.link}</p> : ""}
//                             </div>
//                             : ""}
//                     </div>
//                     <div className="row mt-2">
//                         <div className="col-3">
//                             <a className="text-decoration-none text-secondary" href="/#"><i className="bi bi-chat"></i><span className="ms-3">{post.comment}</span></a>
//                         </div>
//                         <div className="col-3">
//                             <a className="text-decoration-none text-secondary" href="/#"><i className="bi bi-repeat"></i><span className="ms-3">{post.share}</span></a>
//                         </div>
//                         <div className="col-3">
//                             <a className="text-decoration-none text-secondary" href="/#"><i className="bi bi-heart"></i><span className="ms-3">{post.like}</span></a>
//                         </div>
//                         <div className="col-3">
//                             <a className="text-decoration-none text-secondary" href="/#"><i className="bi bi-upload"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </li>
//     )
// }
//
// export default PostItem;