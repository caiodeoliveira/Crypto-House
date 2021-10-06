import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";
import { withStyles } from "@material-ui/core/styles";
import { InputLabel, FormControl, TextField } from "@material-ui/core";

const Form = withStyles({
  root: {
    borderRadius: 5,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "50px",
    margin: "50px 0 0 0",
    fontSize: "27px",
    fontWeight: "bold",
  },
})(FormControl);

const LoginLabel = withStyles({
  root: {
    label: {
      color: "blue",
    },
    "& > *": {
      fontSize: `${typography.subTitle}`,
      width: "90%",
    },
  },
})(InputLabel);

const LoginInput = withStyles({
  root: {
    background: `${colors.body}`,
    borderRadius: 3,
    border: `2px ${colors.primary} solid`,
    width: "200px",
    height: "40px",
    padding: "0 0 0 14px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& > *": {
      fontSize: `${typography.table}`,
      width: "90%",
      color: ``,
    },
  },
})(TextField);

const S = {
  Form,
  LoginLabel,
  LoginInput,
};

export default S;
