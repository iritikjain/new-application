import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/Banner.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn pt-5' : ''
                  }
                >
                  <span className='tagline'>
                    One Stop Decentralized Solution
                  </span>
                  <h1>{`For Supply Chain Management`}</h1>
                  <p>
                    Get real-time trackingof products, verifiable information
                    about the origin and quality of products, and secure,
                    tamper-proof records of transactions.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let's Get Started !<ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
