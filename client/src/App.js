import LoginButton from "./components/login&logout/LoginButton";
import LogoutButton from "./components/login&logout/LogoutButton";
import Profile from "./components/Profile";

const App = () => {
  return (
    <main>
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
    </main>
  );
};

export default App;
