import LoginButton from "../login&logout/LoginButton";
import LogoutButton from "../login&logout/LogoutButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

//

//

//

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav>
      <UnorderedList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Our Fleet</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/account">My Reservations</Link>
          </li>
        ) : null}
        <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
      </UnorderedList>
    </Nav>
  );
};

const UnorderedList = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Nav = styled.nav`
  background-color: green;
  color: white;
`;

export default Navbar;
