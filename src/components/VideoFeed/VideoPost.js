
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getVideoById } from "../../api/Video";

import AppNavbar from "../Navbar/Navbar";

import "./VideoPost.css";
import "./VideoFeed.css";

function VideoPost() {
  const { id } = useParams();

  const [videoUrl, setVideoUrl] = useState("");
  const [videoContent, setVideoContent] = useState({});

  useEffect(() => {
    const fetchVideoUrl = async (videoPath) => {
      try {
        const url = await getDownloadURL(ref(storage, videoPath));
        console.log(url);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video URL: ", error);
      }
    };

    const handleSuccess = (response) => {
      console.log(response);
      setVideoContent(response.data);

      if (response.data && response.data.video_url) {
        fetchVideoUrl(response.data.video_url);
      }
    };

    const handleError = (error) => {
      console.error('Error fetching video:', error);
    };

    getVideoById(id, handleSuccess, handleError);
  }, [id]);

  if (!videoContent) {
    return <div>Video post not found</div>;
  }

  return (
    <div>
      <AppNavbar />
      <div className="center-card">
        <Card className="my-4 card">
          <Card.Body>
            <Card.Title><h1><strong>{videoContent.title}</strong></h1></Card.Title>
            <Card.Text className="video-post-tags"><i>{videoContent.tags}</i></Card.Text>
            {videoUrl ? (
              <video width="100%" height="auto" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div>Loading video...</div>
            )}
            <Card.Text dangerouslySetInnerHTML={{ __html: videoContent.content }} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default VideoPost;
