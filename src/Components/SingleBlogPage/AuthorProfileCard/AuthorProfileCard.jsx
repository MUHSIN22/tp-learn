import avatar from "../../../Assets/avatar.png";
import "./authorProfileCard.css";

const AuthorProfileCard = () => {
    return (
        <div className="author-profile-card">
            <div className="author-profile">
                <img src={avatar} alt="author-avatar" className="author-avatar"/>
                <div className="author-name-and-desg">
                    <strong className="author-name">Muhsin N</strong>
                    <p className='author-desg'>Software Engineer</p>
                    <p className='blog-date-posted'>Posted on 14/09/2022</p>
                </div>
            </div>
            <button className="btn-follow">Follow</button>
            <div className="author-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex voluptas
                adipisci provident ipsa ut quisquam tempore, cum impedit nisi reiciendis iure.
                Facere inventore, facilis perspiciatis quas dolorem minima nisi consectetur in.
                Non corrupti earum autem saepe laborum unde expedita animi alias! Hic corporis
                veritatis similique ducimus, cupiditate animi cum.
            </div>
        </div>
    );
}

export {
    AuthorProfileCard
};