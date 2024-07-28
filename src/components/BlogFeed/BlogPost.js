import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import AppNavbar from "../Navbar/Navbar";

import "./BlogPost.css";
import "./BlogFeed.css";
import data from "./data.json";
import Comments from "../Comments/Comments";
import { useState, useEffect } from "react";
import { getBlogById } from "../../api/Blog";

function BlogPost() {
  const { id } = useParams();
  const currentUser = data.currentUser;

  const [blogContent, setBlogContent] = useState({});

  useEffect(() => {
    const handleSuccess = (response) => {
      setBlogContent(response.data);
    };

    const handleError = (error) => {
      console.error('Error fetching blogs:', error);
    };

    getBlogById(id, handleSuccess, handleError);
  }, []);

  if (!blogContent) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <AppNavbar />
      <div className="center-card">
        <Card className="my-4 card">
          <Card.Img variant="top" src={blogContent.image_url} className="card-img-top" />
          <Card.Body>
            <Card.Title>
              <h1>
                <strong>{blogContent.title}</strong>
              </h1>
            </Card.Title>
            <Card.Text className="blog-post-tags">
              <i>{blogContent.tags}</i>
            </Card.Text>
            <Card.Text dangerouslySetInnerHTML={{ __html: blogContent.content }} />
          </Card.Body>
          <Comments currentUser={currentUser} />
        </Card>
      </div>
    </div>
  );
}

export default BlogPost;
