import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import { LineChart, BarChart, AreaChart, XAxis, YAxis, Tooltip, Legend, Line, Bar, Area, Cell } from 'recharts';
import { FaBookmark } from 'react-icons/fa';

const UserEngagementMetrics = () => {
  // Sample data
  const data = {
    analytics: {
      bookmarks: 1234,
      // likes: 1234,
      // dislikes: 56,
      comments: 789,
      replies: 345,
      // shares: 102,
      posts: 275,
    },
    charts: {
      likesDislikesData: [
        { month: 'Jan', likes: 80, dislikes: 50 },
        { month: 'Feb', likes: 60, dislikes: 80 },
        { month: 'Mar', likes: 90, dislikes: 30 },
        { month: 'Apr', likes: 100, dislikes: 85 },
        { month: 'May', likes: 25, dislikes: 100 },
        { month: 'Jun', likes: 55, dislikes: 110 },
      ],
      commentsRepliesData: [
        { category: 'Comments', value: 1200, color: '#761a9e' },
        { category: 'Replies', value: 600, color: '#182b96' },
      ],
      bookmarksData: [
        { month: 'Jan', bookmarks: 180 },
        { month: 'Feb', bookmarks: 50 },
        { month: 'Mar', bookmarks: 200 },
        { month: 'Apr', bookmarks: 80 },
        { month: 'May', bookmarks: 400 },
        { month: 'Jun', bookmarks: 25 },
      ],
    },
  };

  return (
    <div>
      <Grid container spacing={2}>
        {Object.entries(data.analytics).map(([key, value]) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {/* {key === 'likes' && <ThumbUpIcon sx={{ marginRight: '0.5rem' }} />} */}
                  {/* {key === 'dislikes' && <ThumbDownIcon sx={{ marginRight: '0.5rem' }} />} */}
                  {key === 'bookmarks' && <FaBookmark sx={{ marginRight: '0.5rem' }} />}
                  {key === 'comments' && <CommentIcon sx={{ marginRight: '0.5rem' }} />}
                  {key === 'replies' && <ReplyIcon sx={{ marginRight: '0.5rem' }} />}
                  {key === 'posts' && <EmailIcon sx={{ marginRight: '0.5rem' }} />}
                  {value}
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div style={{ padding: 20, width: '100%', overflowX: 'auto' }}>
        {/* <h2>Engagement Trends: Likes vs. Dislikes</h2>
        <LineChart width={window.innerWidth * 0.9} height={500} data={data.charts.likesDislikesData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="likes" stroke="#00ad1c" name="Likes" />
          <Line type="monotone" dataKey="dislikes" stroke="#ff0000" name="Dislikes" />
        </LineChart> */}

        <h2>Content Amplification: Bookmarks Count Analysis</h2>
        <AreaChart width={window.innerWidth * 0.9} height={500} data={data.charts.bookmarksData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="bookmarks" stroke="#8e5402" fill="#FF9800" name="Bookmarks" />
        </AreaChart>

        <h2>Audience Interaction: Comments vs. Replies</h2>
        <BarChart width={window.innerWidth * 0.9} height={500} data={data.charts.commentsRepliesData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name=" ">
            {data.charts.commentsRepliesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>

        
      </div>
    </div>
  );
};

export default UserEngagementMetrics;
