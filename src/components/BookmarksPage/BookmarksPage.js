import React, { useContext } from "react";
import BlogFeedItem from "../BlogFeed/BlogFeedItem";
import "./BookmarksPage.css";
import { BookmarkContext } from "../../context/BookmarkContext";
import AppNavbar from "../Navbar/Navbar";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";

function BookmarksPage() {
  const { bookmarkedPosts, handleBookmarkToggle } = useContext(BookmarkContext);

  return (
    <div>
      <AppNavbar />
      <VerticalNavBar />
      <div className="bookmarks-content">
        {bookmarkedPosts.length > 0 ? (
          bookmarkedPosts.map((post) => (
            <BlogFeedItem
              key={post.id}
              post={post}
              handleBookmarkToggle={handleBookmarkToggle}
            />
          ))
        ) : (
          <p className="no-bookmarks">No bookmarks yet.</p>
        )}
      </div>
    </div>
  );
}

export default BookmarksPage;
