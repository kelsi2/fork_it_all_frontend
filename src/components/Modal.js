import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "../styles/Modal.scss";
import axios from "axios";



// Create twist modal
const TwistModal = ({show, onClose}) => {

  return (
    <>
      <Modal show={show}>
        <Modal.Dialog>
          <Modal.Header onClick={onClose} closeButton>
            <Modal.Title>Create a New Twist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Do you have an idea to make this recipe better? Enter your personal twist here to share it!</Form.Label>
                <Form.Control type="text" placeholder="Enter twist" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Twist
                </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

// Login Modal
const LoginModal = (props) => {
  const history = useHistory();
  const {show, onClose, handleLogin} = props;

  const [state, setState] = useState({
    email: "",
    password: "",
    loginErrors: "",
  });

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    history.push("/");
  };

  const handleSubmit = (event) => {

    axios.post("http://localhost:3001/api/sessions", {
      email: state.email,
      password: state.password,
    },
      {withCredentials: true}
    ).then(response => {
      if (response.data.logged_in) {
        handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("Error: ", error);
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const eventValue = event.target.value;
    setState({...state, [event.target.name]: eventValue});
  };

  return (
    <>
      <Modal show={show} id="login-modal">
        <Modal.Dialog>
          <Modal.Header onClick={onClose} closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={state.email} onChange={handleChange} required />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required />
              </Form.Group>
              <Button onClick={onClose} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

// Register Modal
const RegisterModal = (props) => {
  const history = useHistory();
  const {show, onClose, handleLogin} = props;
  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    handle: "",
    name: "",
    registrationErrors: "",
  });

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    history.push("/");
  };

  const handleSubmit = (event) => {
    console.log(state);
    axios.post("http://localhost:3001/api/registrations", {
      email: state.email,
      password: state.password,
      password_confirmation: state.password_confirmation,
      handle: state.handle,
      name: state.name,
    },
      {withCredentials: true}
    ).then(response => {
      if (response.data.status === 'created') {
        handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("Error: ", error);
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const eventValue = event.target.value;
    setState({...state, [event.target.name]: eventValue});
  };

  return (
    <>
      <Modal show={show} id="register-modal">
        <Modal.Dialog>
          <Modal.Header onClick={onClose} closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={state.email} onChange={handleChange} required />
              </Form.Group>
              {/* Name */}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name" value={state.name} onChange={handleChange} required />
              </Form.Group>
              {/* User Handle */}
              <Form.Group>
                <Form.Label>Handle</Form.Label>
                <Form.Control type="text" name="handle" placeholder="Handle" value={state.handle} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                {/* Password */}
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" name="password_confirmation" placeholder="Password Confirmation" value={state.password_confirmation} onChange={handleChange} required />
              </Form.Group>
              <Button onClick={onClose} variant="primary" type="submit">Register</Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export {TwistModal, LoginModal, RegisterModal};