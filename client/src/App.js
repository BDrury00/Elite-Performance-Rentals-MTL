import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import SpecificCar from "./pages/SpecificCar";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Navbar from "./components/navbar/Navbar";
import Confirmation from "./pages/Confirmation";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import UserInfo from "./components/login&logout/UserInfo";
//

//

//

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<SpecificCar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/confirm/:reservationId" element={<Confirmation />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarContainer = styled.div`
  margin-top: 10px;
  max-width: 80%;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;

export default App;
