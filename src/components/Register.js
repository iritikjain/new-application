import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/SignUp.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';

const Register = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password1: '',
    password2: '',
    type: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Register');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Registering...');
    console.log(formDetails);
    let response = await fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        firstname: formDetails.firstName,
        lastname: formDetails.lastName,
        emailId: formDetails.email,
        phoneNumber: formDetails.phone,
        passcode: formDetails.password1,
        userType: formDetails.type,
      }),
    });
    setButtonText('Register');
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 201) {
      // redirect left
      alert("Registered Successfully")
    } else {
      alert("'Something Went Wrong, Please Try Again Later.'")
    }
  };

  return (
    <section className='register' id='register'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt='Register'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2 className='text-center'>Register</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type='text'
                      value={formDetails.firstName}
                      placeholder='First Name'
                      onChange={(e) =>
                        onFormUpdate('firstName', e.target.value)
                      }
                      required
                    />

                    <input
                      type='text'
                      value={formDetails.lasttName}
                      placeholder='Last Name'
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      required
                    />

                    <input
                      type='email'
                      value={formDetails.email}
                      placeholder='Email Address'
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                      required
                    />

                    <input
                      type='tel'
                      value={formDetails.phone}
                      placeholder='Phone No.'
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                      required
                    />

                    <input
                      type='password'
                      value={formDetails.password1}
                      placeholder='Password'
                      onChange={(e) =>
                        onFormUpdate('password1', e.target.value)
                      }
                      required
                    />

                    <input
                      type='password'
                      value={formDetails.password2}
                      placeholder='Confirm Password'
                      onChange={(e) =>
                        onFormUpdate('password2', e.target.value)
                      }
                      required
                    />

                    <input
                      type='text'
                      value={formDetails.type}
                      placeholder='Role'
                      onChange={(e) => onFormUpdate('type', e.target.value)}
                      required
                    />

                    <button type='submit'>
                      <span>{buttonText}</span>
                    </button>

                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? 'danger' : 'success'
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </form>
                  <p style={{ marginLeft: '190px' }} className={'pt-4'}>
                    Already Have An Account?{' '}
                    <Link to='/login' style={{ color: 'white' }}>
                      Login
                    </Link>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Register;
