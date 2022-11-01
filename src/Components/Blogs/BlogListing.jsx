import { BlogCard } from "./BlogCard/BlogCard";
import "./blogListing.css";

const BlogListing = () => {
    return (
        <div className="blog-listing-page">
            <h1 className="blog-main-heading">Blogs</h1>
            <div className="sort-selection-wrapper">
                <div className="selection-container">
                    <label htmlFor="Technology">Technology</label>
                    <select name="technology" id="technology" className="selector">
                        <option value="all">All</option>
                        <option value="option 1">option 1</option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                    </select>
                </div>
                <div className="selection-container">
                <label htmlFor="Industry">Industry</label>
                    <select name="industry" id="industry" className="selector">
                        <option value="all">All</option>
                        <option value="option 1">option 1</option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                    </select>
                </div>
            </div>
            <div className="search-bar-wrapper">
                <input type="text" placeholder="search blogs..." className="blog-search-bar"/>
            </div>
            <div className="blog-card-wrapper">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export {BlogListing};