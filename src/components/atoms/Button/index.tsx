import ButtonProps from "./type";
import S from "./styles";

const Button = ({ type, onClick, children }: ButtonProps) => {
  const selectType = () => {
    switch (type) {
      case "recover_button":
        return <S.RecoverButton onClick={onClick}>{children}</S.RecoverButton>;
      case "submit":
        return <S.LoginButton onClick={onClick}>{children}</S.LoginButton>;
    }
  };
  return selectType();
};

export default Button;
