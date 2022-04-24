import { Col, Container, Row } from "reactstrap";
import PrimaryButton from "./shared/PrimaryButton";
import SharedSection from "./shared/SharedSection";

export default function SectionOne() {
  return(
    <>
      <section className="section section-one">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <div data-aos="fade-right">
                <img src="/images/illustration.svg" className="img-fluid" alt="an illustration" />
              </div>
            </Col>
            <Col md={6}>
              <SharedSection
                smallText="Our feature"
                topic="Receive payments quickly from anywhere"
                details="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
              />
              <PrimaryButton text="Get Started" href="/" style={{ marginTop: '1rem' }} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
