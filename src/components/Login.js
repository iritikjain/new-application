import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Login.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Link} from 'react-router-dom'

const Login = () => {
  const formInitialDetails = {
    email: '',
    password: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Login');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Logging In...");
    let response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Login");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Logged In Successfully !'});
    } else {
      setStatus({ succes: false, message: 'Something Went Wrong, Please Try Again Later.'});
    }
  };

  return (
    <section className="login" id="login">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleSubmit}>

                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required/>

                  <input type="password" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)} required/>

                  <button type="submit"><span>{buttonText}</span></button>

                  {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                  }

                </form>
              </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Login"/>
              }
          </TrackVisibility>
          </Col>
          <p style={{marginLeft: "170px"}}>Already Have An Account? <Link to="/register">Register</Link></p>
        </Row>
      </Container>
    </section>
  )
}

export default Login;