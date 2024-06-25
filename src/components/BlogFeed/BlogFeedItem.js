import { Card, Col, Image, Row, OverlayTrigger, Popover } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import bookmarkWhite from "../../assets/bookmark-white.png";
import bookmarkBlack from "../../assets/bookmark-black.png";
import "./BlogFeedItem.css";
import { BookmarkContext } from "../../context/BookmarkContext";
import { Link } from "react-router-dom";

function BlogFeedItem({ post }) {
  const { bookmarkedPosts, handleBookmarkToggle } = useContext(BookmarkContext);
  const [bookmarked, setBookmarked] = useState(false);
  const [userPopupShow, setUserPopupShow] = useState(false);
  const handleUserNameOnMouseEnter = () => {
    setUserPopupShow(true);
  }
  const handleUserNameOnMouseLeave = () => {
    setUserPopupShow(false);
  }

  useEffect(() => {
    setBookmarked(bookmarkedPosts.some((item) => item.id === post.id));
  }, [bookmarkedPosts, post.id]);

  const handleToggleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
    if (typeof handleBookmarkToggle === "function") {
      handleBookmarkToggle(post);
    }
    handleBookmarkToggle(post);
  };

  const handleItemClick = () => {
    const url = `/blog/${post.id}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="blog-feed-item-container">
      <Card
        className="blog-feed-item"
        style={{ width: "40rem" }}
        onClick={handleItemClick}
      >
        <Card.Img
          variant="top"
          src="https://placehold.co/100x40"
          style={{ maxHeight: "260px" }}
          className="img-fluid"
        />
        <Card.Body>
          <div>
            <Row>
              <Col md={1}>
                <Image className='border border-white d-flex' src='https://placehold.co/600x400' style={{ height: '40px', width: '40px', objectFit: 'cover' }} alt="user_picture" roundedCircle />
              </Col>
              <Col>
                <OverlayTrigger
                  show={userPopupShow}
                  placement="auto-start"
                  key='bottom'
                  overlay={
                    <Popover id='user-popover-bottom' onMouseEnter={handleUserNameOnMouseEnter} onMouseLeave={handleUserNameOnMouseLeave}>
                      <Popover.Body>
                        <Row xs='auto'>
                          <Col>
                            <Image className='border border-white d-flex' src='https://placehold.co/600x400' style={{ height: '40px', width: '40px', objectFit: 'cover' }} alt="user_picture" roundedCircle />
                          </Col>
                          <Col>
                            <Link to="/user/jdoe">
                              <div className="d-flex" style={{ marginLeft: '-10px', marginTop: '6px' }}><strong>John Doe</strong></div>
                            </Link>
                          </Col>
                        </Row>
                        <div className="mt-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>
                        <div className="mt-2"><strong>Location</strong></div>
                        <div>Halifax</div>
                        <div><strong>Joined</strong></div>
                        <div>Jun 19, 2024</div>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <div className="d-flex" onMouseEnter={handleUserNameOnMouseEnter} onMouseLeave={handleUserNameOnMouseLeave}>
                    <Link to="/user/jdoe">
                      John Doe
                    </Link>
                  </div>
                </OverlayTrigger>
                <div className="text-secondary d-flex">Posted on Jun 19</div>
              </Col>

            </Row>
          </div>
          <Card.Title>
            <b>{post.title}</b>
          </Card.Title>
          <Card.Text className="blog-feed-item-tags">
            <i>{post.tags}</i>
          </Card.Text>
          <Card.Text>{post.summary}</Card.Text>
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
