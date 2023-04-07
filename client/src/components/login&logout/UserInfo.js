import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const UserInfo = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && <div>{JSON.stringify(user)}</div>;
};

export default UserInfo;
