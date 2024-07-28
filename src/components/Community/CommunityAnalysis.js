import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import Header from "../Navbar/Navbar";
import UserEngagementMetrics from './UserEngagementMetrics'; // Ensure the path is correct
import SentimentAnalysis from './SentimentAnalysis'; // Ensure the path is correct
import DemographicInsights from './DemographicInsights'; // Ensure the path is correct
import './CommunityAnalysis.css';

/**
 * CommunityAnalysis Component
 *
 * This component renders the analysis sections for the community,
 * including user engagement metrics, sentiment analysis, and demographic insights.
 *
 * @component
 */
const CommunityAnalysis = () => {
  return (
    <div>
      <Header />
      <VerticalNavBar />
      <Container className="community-analysis-container">
        <h2>Community Analysis</h2>
        <Tabs
          defaultActiveKey="user-engagement"
          id="justify-tab-example"
          className="mb-6 custom-tabs"
          justify
        >
          <Tab eventKey="user-engagement" title="User Engagement Metrics">
            <UserEngagementMetrics />
          </Tab>
          <Tab eventKey="sentiment-analysis" title="Sentiment Analysis">
            <SentimentAnalysis />
          </Tab>
          <Tab eventKey="demographic-insights" title="Demographic Insights">
            <DemographicInsights />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default CommunityAnalysis;
