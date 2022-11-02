import profileAvatar from "../../../Assets/avatar.png";
import "./commentCard.css";

const CommentCard = () => {
    return(
        <div className="comment-card">
            <div className="commenter-info">
                <img src={profileAvatar} alt="commenter-avatar" className="commenter-avatar"/>
                <strong className="commenter-name">Dibakar</strong>
            </div>
            <div className="comment-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga corporis officiis molestias, sunt at odit veniam voluptate quos sed numquam aliquid fugiat dignissimos modi eligendi nemo placeat velit tempora. Saepe, at provident! Sunt commodi unde doloribus, corporis corrupti praesentium vel cupiditate? Accusamus aliquam explicabo enim! Nemo repellendus a, doloribus vel quia placeat natus tempore dignissimos cupiditate accusantium eius iste totam earum, quod minima ea ex obcaecati accusamus impedit velit harum neque! Non impedit minima recusandae iste fugiat, accusamus asperiores sequi dolor repudiandae cupiditate consequuntur corporis quia. Rerum neque vel natus eligendi, accusantium corporis maxime error nisi quasi. Suscipit, error.
            </div>
        </div>
    );
}

export {CommentCard};