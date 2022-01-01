import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";
import { withStyles } from "@material-ui/core/styles";
import { InputLabel, Input } from "@material-ui/core";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  gap: 70px;
`;

const FormConnectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  font-weight: ${fonts.montserrat.bold};
`;

const LoginLabel = withStyles({
  root: {
    label: {
      color: "blue",
    },
    "& > *": {
      fontSize: `${typography.subTitle}`,
      minWidth: "450px",
    },
  },
})(InputLabel);

const LoginInput = withStyles({
  root: {
    color: `${colors.body}`,
    fontWeight: `bold`,
    fontSize: `20px`,
    padding: "0 15px 0 15px",
  },
})(Input);

const S = {
  LoginLabel,
  LoginInput,
  FormContainer,
  FormContent,
  FormConnectBox,
};

export default S;
