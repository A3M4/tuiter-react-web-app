const postItem = (post) => {
    return (`
<li class="list-group-item">
    <div class="row">
        <div class="col-1">
            <img class="rounded-circle" style="width: 52px" src=${post.avatarIcon}>
        </div>
        <div class="col-11 ps-4">
        
            <div>
                <span class="fw-bolder">${post.userName}</span>
                <i class="fa-solid fa-circle-check"></i>
                <span class="text-secondary"> @${post.handle} - ${post.time}</span>
            </div>
            
            <div>${post.content} </div>
            <div class="card mt-2 border border-secondary rounded-4">
                <img src=${post.image} class="card-img-top rounded-4" alt="...">
                <div class="card-body border-top border-secondary p-3">
                    ${post.newTitle ? `<p class="card-text mb-0">${post.newTitle}</p>` : ''}
                    ${post.newsContent ? `<p class="text-secondary mb-0">${post.newsContent}</p>` : ''}
                    ${post.newsContent ? `<p class="text-secondary mb-0"><i class="fa-solid fa-link"></i>${post.newsLink}</p>` : ''}
                </div>
            </div>

            <div class="row mt-2 ">
                <div class="col-3 ">
                    <a class="text-secondary text-decoration-none" href="#"><i class="fa-regular fa-comment"></i></a>
                    <span class="ms-2 text-secondary">${post.comment}</span>
                </div>
                <div class="col-3">
                    <a class="text-secondary text-decoration-none" href="#"><i class="fa-solid fa-retweet"></i></a>
                    <span class="ms-2 text-secondary">${post.share}</span>
                </div>
                <div class="col-3">
                    <a class="text-secondary text-decoration-none" href="#" class="wd-liked"><i class="fa-solid fa-heart"></i></a>
                    <span class="ms-2 text-secondary">${post.like}</span>
                </div>
                <div class="col-3">
                    <a class="text-secondary text-decoration-none" href="#">
                        <i class="fa-solid fa-arrow-up-from-bracket text-secondary"></i></a>
                </div>
            </div>
        </div>
    </div>
</li>
`)
}

export default postItem;

