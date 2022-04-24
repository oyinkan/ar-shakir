import { Container, Row, Col } from 'reactstrap'

const data = [
  {
    title: "Company",
    details: [
      {
        link: '/about',
        text: 'About Us'
      }, 
      {
        link: '/careers',
        text: 'Careers'
      },
      { 
        link: '/blog',
        text: 'Blog'
      },
      {
        link: '/pricing',
        text: 'Pricing'
      }
    ]
  },
  {
    title: "Product",
    details: [
      {
        link: '/',
        text: 'Invoicing Platform'
      }, 
      {
        link: '/',
        text: 'Accounting Plateform'
      },
      { 
        link: '/',
        text: 'Create Proposal'
      },
      {
        link: '/',
        text: 'Contracts'
      }
    ]
  },
  {
    title: "Resources",
    details: [
      {
        link: '/',
        text: 'Proposal Template'
      }, 
      {
        link: '/',
        text: 'Invoice Template'
      },
      { 
        link: '/',
        text: 'Tuturoial'
      },
      {
        link: '/',
        text: 'How to write a contract'
      }
    ]
  }
]

export default function Footer() {
  return(
    <>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col md={5}>
              <div className="pb-5 mb-5">
                <a href="/" className="footer-logo">AR Shakir</a>
                <p className="footer-text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <Row>
                {data.map((datum, index) => (
                  <Col md={4} key={index}>
                    <div className="links pb-5 mb-5">
                      <h6>{datum.title}</h6>
                      <div>
                        {datum.details.map((datum, index) => (
                          <div key={index}>
                            <a href={datum.link}>{datum.text}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container fluid>
          <div className="footer-bottom d-flex justify-content-between">
            <div>
              <p className="copy">2022 AR Shakir. All rights reserved. <span>--</span> <a href="/">Privacy Policy</a> <span>-</span> <a href="/">Terms of Services</a></p>
            </div>
            <div>
              <p className="copy">Supported by Microsoft Startup</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}