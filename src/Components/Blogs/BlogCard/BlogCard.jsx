import blogThumbnail from "../../../Assets/Blogs/marketing.png";
import './blogCard.css';

const BlogCard = () => {
    // const { image, title, description, date } = blog;
    return (
      <div className="blog-card">
        <div className="blog-card-thumbnail-container">
          <img src={blogThumbnail} alt="blog-thumbnail" className="blog-thumbnail" />
        </div>
        <div className="blog-card-info-container">
          <p className="update-date">Last updated <strong>01/11/22</strong></p>
          <h3 className="blog-card-title">The best way to get organized</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet. In dolorum illo est placeat iure id consequatur eius quo maxime accusantium est sunt sunt id debitis iusto ut voluptas facere.</p>
          <button className="read-more-btn">Read more</button>
        </div>
      </div>
    );
  };
  
  export { BlogCard };