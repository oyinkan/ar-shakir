import { Col, Container, Row } from "reactstrap";
import PrimaryButton from "./shared/PrimaryButton";
import SharedSection from "./shared/SharedSection";

export default function SectionThree() {
  return(
    <>
      <section className="section section-three">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <SharedSection
                smallText="Our feature"
                topic="All payments are linked to your Financy account"
                details="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
              />
              <PrimaryButton text="Get Started" href="/" style={{ marginTop: '1rem' }} />
            </Col>
            <Col md={6}>
              <div data-aos="fade-bottom">
                <img src="/images/card.svg" className="img-fluid" alt="an illustration" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
