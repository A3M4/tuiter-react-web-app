import who from "./Who.js";
import whoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
            <div class="list-group-item list-group-item-action fw-bolder">
                Who to follow
            </div>
            ${who.map(item => whoToFollowListItem(item)).join('')}
        </div>
    `)
}

export default WhoToFollowList;