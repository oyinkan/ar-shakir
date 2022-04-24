import { Button } from 'reactstrap'

interface Props {
  text: string,
  href: string,
  style: any
}

export default function PrimaryButton({text, href, style} : Props) {
  return(
    <>
      <Button href={href} color="primary" style={style}>{text}</Button>
    </>
  )
}
