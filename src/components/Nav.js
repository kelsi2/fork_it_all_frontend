import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Nav.scss";
import {Link} from "react-router-dom";
import Logo from "./images/ForkItAll.png";
import {Nav, Navbar, Form, FormControl, Button, Container, Row} from "react-bootstrap";
import axios from "axios"

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries()).search;
  fetch(`/api/data?search=${formDataObj}`, {
    method: 'GET',
  });
}


function NavbarNav( props ) {
  
  const handleLogOutClick = () => {
    axios.delete("/api/logout", { withCredentials: true })
    .then(() => {
      props.handleLogout();
    })
    .catch(error => {
      console.log("Logout Error ", error)
    });
  }
  
  return (
    <Navbar bg="dark" expand="xxl" sticky="top" className="nav">
      <Container fluid>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/user_profile">Profile</Link>
              <Link to="/recipes">
                Recipes
                </Link>
              <Link to="/my_twists">
                My Twists
                </Link>
              <Link to="/fave_twists">
                Fave Twists
              </Link>
              <Link to="/user_dashboard">
                Dashboard
              </Link>
              <Link to="/fave_users">
                Fave Users
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="img-responsive rounded mx-auto d-block"
          />
        </Link>
        <Form inline onSubmit={handleSubmit}>
          <FormControl type="text" name="search" placeholder="Search" className="mr-sm-2" />
          <Button variant="success" type="submit" className="mr-sm-2">
            Search
          </Button>
        </Form>
        <Row>
          { props.loggedInStatus === "NOT_LOGGED_IN" ?
          <Link to="/login">
            <Button variant="primary" className="mr-sm-2">
              Log in
            </Button>
          </Link> 
          :<>
          <p>User: {props.user.handle} </p>
          <Button onClick={handleLogOutClick} variant="danger" className="mr-sm-2">
            Log out
          </Button>
          </>
          }
        </Row>
      </Container>
    </Navbar >
  );
}

export default NavbarNav;
