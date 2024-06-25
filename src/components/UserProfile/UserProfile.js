import { Button, Card, CardBody, Container, Col, Image, Row, ListGroup } from 'react-bootstrap';
import AppNavbar from '../Navbar/Navbar';
import BlogFeedItem from '../BlogFeed/BlogFeedItem';
import postLogo from '../../assets/post_icon.svg';
import commentLogo from '../../assets/comment_icon.svg';
import locationIcon from '../../assets/location_icon.svg';
import birthdayIcon from '../../assets/birthday_icon.svg';
import communityIcon from '../../assets/community_icon.svg';

function UserProfile() {
   const userBlogItems = [
    { id: 1, title: "Blog Post 1", summary: "Summary of blog post 1" },
    { id: 2, title: "Blog Post 2", summary: "Summary of blog post 2" },
    { id: 3, title: "Blog Post 3", summary: "Summary of blog post 3" },
  ];

  return (
    <div>
      <AppNavbar />
      <Container>
        <Card>
          <Image src='https://placehold.co/1200x400' style={{ height: '200px', objectFit: 'cover' }} />
          <div style={{ height: '120px', textAlign: 'center', marginTop: '-100px', marginBottom: '1rem' }}>
            <Image className='border border-white' src='https://placehold.co/600x400' style={{ height: '128px', width: '128px', marginTop: '10px', objectFit: 'cover' }} alt="user_picture" roundedCircle />
          </div>
          <CardBody>
            <Card.Title style={{ textAlign: 'center' }}>John Doe</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              <div className='text-secondary'>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </div>
            </Card.Text>
            <div className='d-flex justify-content-center mb-3 text-secondary'>
              <div><img src={locationIcon} alt="Location Icon" /> Halifax, NS</div>
              <div className='ms-3'><img src={birthdayIcon} alt="Birthday Icon" /> Joined on Jun 20, 2024</div>
            </div>
            <hr />
            <div>
              <Row>
                <Col>
                  <div className='d-flex justify-content-center'><h6>Education</h6></div>
                  <div className='d-flex justify-content-center'>Dalhousie University</div>
                </Col>
                <Col>
                  <div className='d-flex justify-content-center'><h6>Work</h6></div>
                  <div className='d-flex justify-content-center'>Wayne Enterprises</div>
                </Col>
              </Row>
              <hr />
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/settings">
                <Button>Edit Profile</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
        <div style={{ marginTop: '4px' }}>
          <Row>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush" >
                  <ListGroup.Item><img src={postLogo} alt="Post Logo" /> 10 posts published</ListGroup.Item>
                  <ListGroup.Item><img src={commentLogo} alt="Comment Logo" /> 100 comments written</ListGroup.Item>
                  <ListGroup.Item><img src={communityIcon} alt="Community Logo" /> 42 communities joined</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card className='mt-3'>
                <Card.Header>
                  Communities Joined
                </Card.Header>
                <ListGroup variant="flush" >
                  <ListGroup.Item>Marvel</ListGroup.Item>
                  <ListGroup.Item>Hiking</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <Card.Title>Posts</Card.Title>
                  <ListGroup variant="flush" >
                    {userBlogItems.map((post) => (
                      <ListGroup.Item>
                        <BlogFeedItem
                          key={post.id}
                          post={post}
                        />
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </CardBody>
                <CardBody>
                  <Card.Title>Comments</Card.Title>
                  <ListGroup variant="flush" >
                    <ListGroup.Item>Comment 1</ListGroup.Item>
                    <ListGroup.Item>Comment 2</ListGroup.Item>
                    <ListGroup.Item>Comment 3</ListGroup.Item>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default UserProfile;
