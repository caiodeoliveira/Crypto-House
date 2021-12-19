import React from "react";
import ButtonProps from "./type";
import S from "./styles";

const Button = ({ type, id, onClick, children }: ButtonProps) => {
  const selectType = () => {
    switch (type) {
      case "recover_button":
        return <S.RecoverButton>{children}</S.RecoverButton>;
      case "submit":
        return <S.LoginButton>{children}</S.LoginButton>;
    }
  };
  return selectType();
};

export default Button;
