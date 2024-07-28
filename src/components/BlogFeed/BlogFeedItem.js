import {
  Card,
  Col,
  Image,
  Row,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import bookmarkWhite from "../../assets/bookmark-white.png";
import bookmarkBlack from "../../assets/bookmark-black.png";
import { BookmarkContext } from "../../context/BookmarkContext";
import { Link, useNavigate } from "react-router-dom";

import "./BlogFeedItem.css";
import { LinkContainer } from "react-router-bootstrap";

function BlogFeedItem({ post }) {
  const { bookmarkedPosts, handleBookmarkToggle } = useContext(BookmarkContext);
  const [bookmarked, setBookmarked] = useState(false);
  const [userPopupShow, setUserPopupShow] = useState(false);
  const handleUserNameOnMouseEnter = () => {
    setUserPopupShow(true);
  };
  const handleUserNameOnMouseLeave = () => {
    setUserPopupShow(false);
  };

  const normalizeId = (post) => post._id || post.blog_post_id;
  useEffect(() => {
    setBookmarked(
      bookmarkedPosts.some((item) => normalizeId(item) === normalizeId(post))
    );
  }, [bookmarkedPosts, post]);

  const handleToggleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
    handleBookmarkToggle(post);
  };

  const formatBlogTimestamp = (ts) => {
    const d = new Date(ts * 1000);
    const now = new Date()
    const month = d.toLocaleString('default', { month: "long" });
    return month + " " + d.getDate() + ((now.getFullYear() === d.getFullYear()) ? "" : ", " + d.getFullYear());
  }

  return (
    <div className="blog-feed-item-container">
      <Card
        className="blog-feed-item"
        style={{ width: "40rem" }}
      >
        <LinkContainer to={"/blog/" + post._id}>
          <Card.Img
            variant="top"
            src={post.image_url}
            style={{ maxHeight: "260px", objectFit: "cover" }}
            className="img-fluid"
          />
        </LinkContainer>
        <Card.Body>
          <div>
            <Row>
              <Col md={1}>
                <Image
                  className="border border-white d-flex"
                  src="https://placehold.co/600x400"
                  style={{ height: "40px", width: "40px", objectFit: "cover" }}
                  alt="user_picture"
                  roundedCircle
                />
              </Col>
              <Col>
                <OverlayTrigger
                  show={userPopupShow}
                  placement="auto-start"
                  key="bottom"
                  overlay={
                    <Popover
                      id="user-popover-bottom"
                      onMouseEnter={handleUserNameOnMouseEnter}
                      onMouseLeave={handleUserNameOnMouseLeave}
                    >
                      <Popover.Body>
                        <Row xs="auto">
                          <Col>
                            <Image
                              className="border border-white d-flex"
                              src="https://placehold.co/600x400"
                              style={{
                                height: "40px",
                                width: "40px",
                                objectFit: "cover",
                              }}
                              alt="user_picture"
                              roundedCircle
                            />
                          </Col>
                          <Col>
                            <Link to="/user/jdoe">
                              <div
                                className="d-flex"
                                style={{
                                  marginLeft: "-10px",
                                  marginTop: "6px",
                                }}
                              >
                                <strong>John Doe</strong>
                              </div>
                            </Link>
                          </Col>
                        </Row>
                        <div className="mt-2">
                          Neque porro quisquam est qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit...
                        </div>
                        <div className="mt-2">
                          <strong>Location</strong>
                        </div>
                        <div>Halifax</div>
                        <div>
                          <strong>Joined</strong>
                        </div>
                        <div>Jun 19, 2024</div>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <div
                    className="d-flex"
                    onMouseEnter={handleUserNameOnMouseEnter}
                    onMouseLeave={handleUserNameOnMouseLeave}
                  >
                    <Link to="/user/jdoe">John Doe</Link>
                  </div>
                </OverlayTrigger>
                <div className="text-secondary d-flex">Posted on {formatBlogTimestamp(post.timestamp)}</div>
              </Col>
            </Row>
          </div>
          <LinkContainer to={"/blog/" + post._id}>
            <Card.Title>
              <b>{post.title}</b>
            </Card.Title>
          </LinkContainer>
          <LinkContainer to={"/blog/" + post._id}>
            <Card.Text className="blog-feed-item-tags">
              <i>{post.tags}</i>
            </Card.Text>
          </LinkContainer>
          <LinkContainer to={"/blog/" + post._id}>
            <Card.Text>{post.summary}</Card.Text>
          </LinkContainer>
          <div onClick={handleToggleBookmark} style={{ cursor: "pointer" }}>
            <img
              src={bookmarked ? bookmarkBlack : bookmarkWhite}
              alt="Bookmark"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogFeedItem;
