import { Card } from 'react-bootstrap';
import './VideoFeedItem.css';

function VideoFeedItem({ video }) {

  const handleItemClick = () => {
    const url = `/videos/${video.id}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
