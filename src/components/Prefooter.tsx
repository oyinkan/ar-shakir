import { Col, Container, Row } from 'reactstrap'
import SecondaryButton from './shared/SecondaryButton'

export default function Prefooter() {
  return(
    <>
      <Container fluid>
        <div className="prefooter" data-aos="zoom-in">
          <Row className="align-items-center">
            <Col md={9}>
              <div>
                <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-right">
                <a href="/">
                  <SecondaryButton text="Get Started" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}
