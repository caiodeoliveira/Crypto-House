import TextProps from "./types";
import S from "./styles";

const Text = ({ type, children, color, margin }: TextProps) => {
  const selectType = () => {
    switch (type) {
      case "title":
        return <S.TitleText style={{ color: color }}>{children}</S.TitleText>;
      case "subtitle":
        return <S.SubTitleText>{children}</S.SubTitleText>;
      case "input_label":
        return <S.TitleText>{children}</S.TitleText>;
      case "keep_connect_label":
        return <S.TitleText>{children}</S.TitleText>;
      case "login_problem_label":
        return <S.TitleText>{children}</S.TitleText>;
      case "footer":
        return (
          <S.FooterText style={{ margin: margin }}>{children}</S.FooterText>
        );
      case "paragraph_text":
        return <S.CoinPriceLabel>{children}</S.CoinPriceLabel>;
      case "welcome_text":
        return <S.WelcomeText>{children}</S.WelcomeText>;
      case "log_out_text":
        return <S.LogOutText>{children}</S.LogOutText>;
    }
  };
  return selectType();
};

export default Text;
