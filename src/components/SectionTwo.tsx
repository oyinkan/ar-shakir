import { Col, Container, Row } from "reactstrap";
import GetStartedForm from "./GetStartedForm";
import SharedSection from "./shared/SharedSection";

export default function SectionTwo() {
  return(
    <>
      <Container fluid>
        <section className="section section-two">
          <Row className="align-items-center">
            <Col md={7}>
              <SharedSection
                smallText="Our feature"
                topic="Receive payments quickly from anywhere"
                details="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
              />
            </Col>
            <Col md={5}>
              <img src="/images/flies.svg" className="flies-image" alt="" />
              <div className="get-started">
                <h6 className="mb-4">Get Started for Free</h6>
                <GetStartedForm />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  )
}
