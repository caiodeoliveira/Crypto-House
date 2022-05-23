import { CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const SpinContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinComponent = withStyles({
  root: {
    width: "100vw",
    heigth: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})(CircularProgress);
