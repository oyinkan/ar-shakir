import  { Container } from 'reactstrap'

const data = [
  '/images/openzepplin.svg', 
  '/images/oracle.svg', 
  '/images/morpheous.svg', 
  '/images/samsung.svg', 
  '/images/monday.svg',
  '/images/segment.svg'
]

export default function Sponsors() {
  return(
    <>
      <section className="sponsors">
        <Container fluid>
          <p className="mb-4 pb-3">Over 32k+ software  businesses growing with AR Shakir</p>
          <div className="grid">
            {data.map((datum, index) => (
              <div key={index} className="text-center mb-5">
                <img src={datum} alt="sponsor's logo" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
