import BlogFeedItem from "./BlogFeedItem";
import "./BlogFeed.css";

function BlogFeed({ handleBookmarkToggle }) {
  const blogItems = [
    {
      id: 1,
      title: "Blog Post 1",
      summary: "Summary of blog post 1",
      tags: "#tag1, #tag2",
    },
    {
      id: 2,
      title: "Blog Post 2",
      summary: "Summary of blog post 2",
      tags: "#tag1, #tag2",
    },
    {
      id: 3,
      title: "Blog Post 3",
      summary: "Summary of blog post 3",
      tags: "#tag1, #tag3",
    },
  ];

  return (
    <div className="blog-feed-container">
      {blogItems.map((post) => (
        <BlogFeedItem
          key={post.id}
          post={post}
          handleBookmarkToggle={handleBookmarkToggle}
        />
      ))}
    </div>
  );
}

export default BlogFeed;
