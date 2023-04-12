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
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding: 30px;
  }
`;

const Nav = styled.nav`
  background-color: lightgrey;
  color: white;
  padding: 30px;
  border: 2px solid black;
  border-radius: 10px;
  position: relative;
  z-index: 9999;
`;

export default Navbar;
