import React from "react";
import * as S from "./styles";
import Button from "../../atoms/Button";
import { useHistory } from "react-router-dom";

export const SignInAppContainer = () => {
  const history = useHistory();

  return (
    <S.Container>
      <h1>You are not Logged Bro: / </h1>
      <S.SignInButtonContainer>
        <Button
          type="submit"
          onClick={() => {
            history.push("/login");
          }}
        >
          Sign In Now
        </Button>
      </S.SignInButtonContainer>
    </S.Container>
  );
};
