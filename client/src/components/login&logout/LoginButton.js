import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>Sign In</Button>
    )
  );
};

const Button = styled.button`
  background-color: transparent;
  color: black;
  font-weight: 700;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

export default LoginButton;
