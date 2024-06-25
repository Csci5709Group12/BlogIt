import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './VideoFeedItem.css';

function VideoFeedItem({ video }) {
  const navigate = useNavigate();

  const handleItemClick = () => {
    const url = `/videos/${video.id}`;
    navigate(url);
  };

  return (
    <div className="col-md-4 mb-4">
      <Card className="video-feed-item" onClick={handleItemClick}>
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={video.thumbnailUrl}
            className="img-fluid"
          />
          <div className="video-time">{video.videoTime}</div>
        </div>
        <Card.Body>
          <Card.Title><b>{video.title}</b></Card.Title>
          <Card.Text className="video-author-name">
            {video.author}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VideoFeedItem;
