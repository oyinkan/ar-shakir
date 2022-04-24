import { Button } from 'reactstrap'

interface Props {
  text: string
}

export default function SecondaryButton({text, ...props} : Props) {
  return(
    <>
      <Button color="secondary" {...props}>{text}</Button>
    </>
  )
}
