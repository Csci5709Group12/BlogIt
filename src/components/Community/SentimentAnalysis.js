import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SentimentAnalysis = () => {
  // Sample data
  const data = {
    overallScore: 7.8,
    trendData: [
      { month: 'Jan', positive: 70, negative: 20, neutral: 10 },
      { month: 'Feb', positive: 60, negative: 25, neutral: 15 },
      { month: 'Mar', positive: 80, negative: 15, neutral: 5 },
      { month: 'Apr', positive: 65, negative: 30, neutral: 5 },
      { month: 'May', positive: 75, negative: 10, neutral: 15 },
      { month: 'Jun', positive: 90, negative: 5, neutral: 5 },
    ],
  };

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Overall Sentiment Score
              </Typography>
              <Typography variant="h2" component="div" color="primary">
                {data.overallScore}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.overallScore >= 8 && <SentimentVerySatisfiedIcon fontSize="large" />}
                {data.overallScore >= 6 && data.overallScore < 8 && <SentimentSatisfiedIcon fontSize="large" />}
                {data.overallScore >= 4 && data.overallScore < 6 && <SentimentNeutralIcon fontSize="large" />}
                {data.overallScore >= 2 && data.overallScore < 4 && <SentimentDissatisfiedIcon fontSize="large" />}
                {data.overallScore < 2 && <SentimentVeryDissatisfiedIcon fontSize="large" />}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ padding: 20, width: '100%', overflowX: 'auto' }}>
        <h2>Sentiment Trend Analysis</h2>
        <LineChart width={window.innerWidth * 0.9} height={500} data={data.trendData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="positive" stroke="#00C49F" name="Positive" />
          <Line type="monotone" dataKey="negative" stroke="#FF0000" name="Negative" />
          <Line type="monotone" dataKey="neutral" stroke="#FFC658" name="Neutral" />
        </LineChart>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
