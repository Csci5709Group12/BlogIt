import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import './CommunityDetail.css';
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import Header from "../Navbar/Navbar";

const CommunityDetail = () => {
  const { communityId } = useParams();
  const [community, setCommunity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCommunityDetails(communityId);
  }, [communityId]);

  const fetchCommunityDetails = async (id) => {
    const data = { id, name: 'React Developers', description: 'A community for React enthusiasts' };
    setCommunity(data);
  };

  return (
    <div> 
      <Header />
      <VerticalNavBar />
      <Container className="community-detail-container">
        {community ? (
          <>
            <h2>{community.name}</h2>
            <p>{community.description}</p>
            <Button onClick={() => navigate(`/community/${communityId}/analysis`)} className="analysis-button">
              Community Analysis
            </Button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </div>
  );
};

export default CommunityDetail;
