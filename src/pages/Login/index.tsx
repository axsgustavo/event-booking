import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BiLock, BiUser } from "react-icons/bi";
import { BoxInput, ButtonEnter, Container, Form, LinkSignup } from "./styles";

export function Login() {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <Container>
      <Helmet>
        <title>Login | EventBooking</title>
      </Helmet>
      <Form>
        <h1><span>EventBooking_</span><br />Sign In</h1>
        <BoxInput>
          <span>
            <BiUser size={20} />
          </span>
          <input type="text" placeholder="User e-mail" />
        </BoxInput>
        <BoxInput>
          <span>
            <BiLock size={20} />
          </span>
          <input type={viewPassword ? "text" : "password"} placeholder="Password"  />
          <button type="button" onClick={() => setViewPassword(!viewPassword)}>
            {viewPassword ? <AiOutlineEye size={18} /> : <AiOutlineEyeInvisible size={18} />}
          </button>
        </BoxInput>
        <ButtonEnter>Enter</ButtonEnter>
        <LinkSignup>
          Not registered yet? <Link to="/">Sign Up</Link>
        </LinkSignup>
      </Form>
    </Container>
  );
}