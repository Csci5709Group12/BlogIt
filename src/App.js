import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import VideoFeed from "./components/VideoFeed/VideoFeed";
import ComposeBlog from "./components/ComposeBlog/ComposeBlogPost";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import UserProfile from "./components/UserProfile/UserProfile";
import Settings from "./components/Settings/Settings";
import BookmarksPage from "./components/BookmarksPage/BookmarksPage";
import BlogPost from "./components/BlogFeed/BlogPost";
import Faq from "./components/Faq/Faq";
import ForgotPassword from "./components/Login/ForgotPassword";
import Tags from "./components/Tags/Tags";
import VideoPost from "./components/VideoFeed/VideoPost";
import ComposeVideo from "./components/ComposeVideo/ComposeVideoPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        {/* User profiles can be accessed from /:username. Similar to dev.to */}
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/videos" element={<VideoFeed />} />
        <Route path="/videos/:id" element={<VideoPost />} />
        <Route path="/create-blog-post" element={<ComposeBlog />} />
        <Route path="/create-video-post" element={<ComposeVideo />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
