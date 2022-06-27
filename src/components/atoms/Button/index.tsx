import ButtonProps from "./type";
import S from "./styles";

export const Button = ({
  type,
  onClick,
  disabled,
  children,
  margin,
}: ButtonProps) => {
  const selectType = () => {
    switch (type) {
      case "recover_button":
        return (
          <>
            <S.RecoverButton onClick={onClick} disabled={disabled}>
              {children}
            </S.RecoverButton>
          </>
        );
      case "submit":
        return (
          <>
            <S.LoginButton onClick={onClick} variant={"contained"}>
              {children}
            </S.LoginButton>
          </>
        );
      case "log_out":
        return (
          <>
            <S.LogoutButton onClick={onClick} style={{ margin: margin }}>
              {children}
            </S.LogoutButton>
          </>
        );
    }
  };
  return selectType();
};
