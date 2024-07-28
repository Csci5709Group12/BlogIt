import BlogFeedItem from "./BlogFeedItem";
import "./BlogFeed.css";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../api/Blog";

function BlogFeed({ handleBookmarkToggle }) {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    const handleSuccess = (response) => {
      setBlogItems(response.data.blogs);
    };

    const handleError = (error) => {
      console.error('Error fetching blogs:', error);
    };

    getAllBlogs(handleSuccess, handleError);
  }, []);

  return (
    <div className="blog-feed-container">
      {blogItems.map((post) => (
        <BlogFeedItem
          key={post._id}
          post={post}
          handleBookmarkToggle={handleBookmarkToggle}
        />
      ))}
    </div>
  );
}

export default BlogFeed;
