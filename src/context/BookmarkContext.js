import React, { createContext, useState, useEffect } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
    setBookmarkedPosts(savedBookmarks);
  }, []);

  const handleBookmarkToggle = (post) => {
    let updatedBookmarks;
    if (bookmarkedPosts.some((item) => item.id === post.id)) {
      // Remove post from bookmarks
      updatedBookmarks = bookmarkedPosts.filter((item) => item.id !== post.id);
    } else {
      // Add post to bookmarks
      updatedBookmarks = [...bookmarkedPosts, post];
    }
    setBookmarkedPosts(updatedBookmarks);
    localStorage.setItem("bookmarkedPosts", JSON.stringify(updatedBookmarks));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedPosts, handleBookmarkToggle }}>
      {children}
    </BookmarkContext.Provider>
  );
};
