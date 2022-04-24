import { Col, Container, Row } from "reactstrap";
import PrimaryButton from "./shared/PrimaryButton";

export default function HeroSection() {
  return(
    <>
      <section className="hero-section">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}> 
              <div data-aos="fade-up">
                <h1>Managing business payments has never been easier</h1>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <div className="d-flex">
                  <div>
                    <PrimaryButton text="Get Started" href="/" style={{ marginTop: '1rem' }} />
                  </div>
                  <div className="play-wrapper d-flex">
                    <div>
                      <img src="/images/play.svg" alt="play icon" />
                    </div>
                    <div>
                      <a href="/" className="how-it-works">See How It Works</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="image-wrapper">
                <img src="/images/hero-image.svg" className="img-fluid" alt="an illustration" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
