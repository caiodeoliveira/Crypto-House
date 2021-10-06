import React from "react";
import S from "./styles";

const FormLoginContainer = () => {
  return (
    <S.Form>
      <label>
        Email
        <S.LoginInput id="my-input" aria-describedby="my-helper-text" />
      </label>
      <label>
        Password
        <S.LoginInput id="my-input" aria-describedby="my-helper-text" />
      </label>
    </S.Form>
  );
};

export default FormLoginContainer;
