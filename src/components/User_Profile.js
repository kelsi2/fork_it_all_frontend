import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Profile.scss";
import axios from "axios";
import {Nav, NavItem, NavLink, Form, FormControl, Button, Container, Row, Image, Col} from "react-bootstrap";

function User_Profile(props) {
  const id = parseInt(props.match.params.user);
  console.log(props);

  const editUser = (data) => {
    axios.put(`api/users/${props.user.id}`, data);
  };

  let imageSource = "";
  props.user.profile_picture !== null ?
    imageSource = props.user.profile_picture :
    imageSource = "https://www.flaticon.com/svg/static/icons/svg/817/817747.svg";

  return (
    <Container className="emp-profile">
      <Form method="post">
        <Row>
          <Col className="md-4">
            <div className="profile-img">
              <Image src={imageSource} alt="Profile picture" />
              <Row>
                <div id="change-photo">
                  {props.user.id === id ? (<Button bsPrefix className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </Button>) : null}
                </div>
                <div id="edit-profile">
                  {props.user.id === id ?
                    (<Button bsPrefix type="submit" className="file btn btn-lg btn-primary" name="btnAddMore">Edit Profile</Button>) : (<Button bsPrefix type="submit" className="file btn btn-lg btn-primary" name="btnAddMore">Follow User</Button>)}
                </div>
              </Row>
            </div>
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-4 top-row">
                    <label className="info-labels">User Handle</label>
                  </div>
                  <div className="col-md-4 top-row">
                    <p>{props.user.handle}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Name</label>
                  </div>
                  <div className="col-md-4">
                    <p>{props.user.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Email</label>
                  </div>
                  <div className="col-md-4">
                    <p>{props.user.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Phone</label>
                  </div>
                  <div className="col-md-4">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Profession</label>
                  </div>
                  <div className="col-md-5">
                    <p>Professional Dino Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="md-8">
            <div className="profile-head">
              <h3>
                {props.user.name}
              </h3>
            </div>
            <div>
              <h5>My Bio</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id. Quis vel eros donec ac odio tempor orci. Nulla malesuada pellentesque elit eget gravida cum sociis. Mauris commodo quis imperdiet massa tincidunt. Id leo in vitae turpis massa sed. Et netus et malesuada fames ac turpis egestas. Fermentum iaculis eu non diam phasellus vestibulum. Odio tempor orci dapibus ultrices in iaculis nunc sed. Faucibus purus in massa tempor nec feugiat nisl pretium.
              </p>
              <p>
                Eget nullam non nisi est sit amet. Diam quis enim lobortis scelerisque fermentum. Mattis rhoncus urna neque viverra justo nec ultrices dui. Orci phasellus egestas tellus rutrum tellus pellentesque. Nisl rhoncus mattis rhoncus urna neque. Morbi quis commodo odio aenean sed adipiscing diam. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sit amet aliquam id diam maecenas ultricies mi eget. Purus gravida quis blandit turpis cursus in hac. Scelerisque eu ultrices vitae auctor eu augue ut. At auctor urna nunc id cursus metus aliquam eleifend mi. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Commodo viverra maecenas accumsan lacus vel. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Lectus nulla at volutpat diam ut venenatis tellus in.
              </p>
              <p>
                Tristique senectus et netus et malesuada. Magna fermentum iaculis eu non diam phasellus. Elementum pulvinar etiam non quam. Ut venenatis tellus in metus vulputate eu scelerisque. Vel eros donec ac odio tempor orci dapibus ultrices. Sit amet aliquam id diam maecenas ultricies. Neque ornare aenean euismod elementum nisi quis. Laoreet id donec ultrices tincidunt arcu non sodales neque. Tempor orci eu lobortis elementum nibh tellus molestie. Massa massa ultricies mi quis hendrerit dolor magna eget. Dolor sed viverra ipsum nunc aliquet bibendum. Accumsan tortor posuere ac ut.
              </p>
            </div>
          </Col>
        </Row>
      </Form >
    </Container >
  );
}

export default User_Profile;
