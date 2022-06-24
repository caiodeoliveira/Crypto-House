import styled from "styled-components";
import { withStyles, ListItem } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DrawerMenuButtonContainer = styled.button`
  position: absolute;
  left: 10px;
  color: black;
  border: 0;
  background: none;
`;

export const SignOffContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 35px;
`;

export const SignOffButton = withStyles({
  root: {
    marginRight: "35px",
    height: "100%",
  },
})(ListItem);

export const WelcomeTextContainer = styled.div`
  display: flex;
  align-items: center;
`;
