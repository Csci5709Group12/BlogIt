import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CommunityPage.css';
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import Header from "../Navbar/Navbar";

const CommunityPage = () => {
  const [communities, setCommunities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    const data = [
      { id: 1, name: 'React Developers', description: 'A community for React enthusiasts' },
      { id: 2, name: 'Data Science', description: 'Discuss data science and machine learning' },
    ];
    setCommunities(data);
  };

  return (
    <div> 
      <Header />
      <VerticalNavBar />
        <Container className="community-page-container">
        <h3 className="text-center mb-4 community-title">Communities</h3>
        <Row>
            {communities.map((community) => (
            <Col key={community.id} sm={12} md={6} lg={4} className="mb-4">
                <Card onClick={() => navigate(`/community/${community.id}`)} className="community-card">
                <Card.Body>
                    <Card.Title>{community.name}</Card.Title>
                    <Card.Text>{community.description}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        <div className="text-center">
            <Button onClick={() => navigate('/create-community')} className="create-community-button">
            <FontAwesomeIcon icon={faPlusCircle} /> Create Community
            </Button>
        </div>
        </Container>
    </div>
  );
};

export default CommunityPage;
