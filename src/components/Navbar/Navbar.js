import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Form, InputGroup, FormControl, Button, Image, Modal } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Navbar.css'; // Ensure your CSS files are correctly imported
import '../common.css';
import { useNavigate } from 'react-router-dom';

function AppNavbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const displayCreatePostBox = () => {
    handleShow();
  }

  const handleNavigate = (e) => {
    if (e.target.name === "blog") {
      handleClose();
      navigate("/create-blog-post");
    } else {
      handleClose();
      navigate("/create-video-post");
    }
  }

  return (
    <Navbar expand="lg" className="bg-color-lavender" fixed="top" sticky="top">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img alt="Brand Logo" src={logo} className="navbar-logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Form inline>
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="basic-addon2">
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
        <Nav className='justify-content-end'>
          <Nav.Link>
            <Button
              variant="outline-primary"
              className="rounded-pill"
              onClick={displayCreatePostBox}
            >
              Create Post
            </Button>
          </Nav.Link>
          <NavDropdown title={
            <Image className='border border-white' src='https://placehold.co/600x400' style={{ height: '40px', width: '40px', objectFit: 'cover' }} alt="user_picture" roundedCircle />
          } id="nav-profile-dropdown">
            <NavDropdown.Item>
              <Link to="/user/jdoe">
                <div>
                  John Doe
                </div>
                <div class='text-secondary'>
                  @jdoe
                </div>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/settings">
                Settings
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Sign out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

      <Modal show={show} onHide={handleClose} animation={false} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Choose Post Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-around">
            <Button variant="primary" name="blog" className="App-Button" onClick={handleNavigate}>Create Blog Post</Button>
            <Button variant="success" name="video" className="App-Button" onClick={handleNavigate}>Create Video Post</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="Modal-Button" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default AppNavbar;
