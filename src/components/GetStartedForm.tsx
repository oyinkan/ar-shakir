import { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import SecondaryButton from "./shared/SecondaryButton";

export default function GetStartedForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <>
      <Form>
        <FormGroup className="mb-4">
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <SecondaryButton text="Get Started" />
      </Form>
    </>
  )
}
