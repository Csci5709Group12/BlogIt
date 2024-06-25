import VideoFeedItem from './VideoFeedItem';
import './VideoFeed.css';
import AppNavbar from '../Navbar/Navbar';

function VideoFeed() {
  const videoItems = [
    { id: 1, videoTime: '3:42', title: 'What is version Control', author: 'Git', thumbnailUrl: 'https://i.ytimg.com/vi/IeXhYROClZk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuZLIVJr-13HIo3WYgqW5vVbKZhQ'},
    { id: 2, videoTime: '5:18', title: '100 seconds of Kubernetes', author: 'Darth Vader', thumbnailUrl: 'https://i.ytimg.com/vi/PziYflu8cB8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCK4XQkLsEVhgHH4g3WRhDpgvwA4g'},
    { id: 3, videoTime: '2:56', title: '100 seconds of ReactJS', author: 'ReactDeveloper420', thumbnailUrl: 'https://i.ytimg.com/vi/Tn6-PIqc4UM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7xLVR7f-tDlEFf3A4oAGaJoTuJw'},
    { id: 4, videoTime: '2:21', title: '100 seconds of Pytorch', author: 'AwidWebDev', thumbnailUrl: 'https://i.ytimg.com/vi/ORMx45xqWkA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOkVO5_1zB_kENzkRX_ZIMwuLXZw'},
    { id: 5, videoTime: '3:16', title: 'My First Social Engineering Hack', author: 'Kevin Mitnick', thumbnailUrl: 'https://i.ytimg.com/vi/YmGwdoS706M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaHyfgMrhocEpNt3Q3VH_e8WK-dg'},
    { id: 6, videoTime: '1:39', title: 'What is DevOps?', author: 'DevOpsPro', thumbnailUrl: 'https://i.ytimg.com/vi/Xrgk023l4lI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMQ9ZysgAujkExGzE5k5miqsw7WQ'},
  ];

  return (
    <div>
      <AppNavbar />
      <div className="video-feed-container">
        <div className="row">
          {videoItems.map(item => (
            <VideoFeedItem key={item.id} video={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoFeed;
