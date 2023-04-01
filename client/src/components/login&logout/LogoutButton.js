import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <Button onClick={() => logout()}>Sign Out</Button>;
};

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
`;

export default LogoutButton;
