interface Props {
  smallText: string,
  topic: string,
  details: string
}

export default function SharedSection({ smallText, topic, details} : Props) {
  return(
    <>
      <div className="shared-section">
        <p className="mb-4">{smallText}</p>
        <h2 className="mb-4 pb-4">{topic}</h2>
        <p>{details}</p>
      </div>
    </>
  )
}
