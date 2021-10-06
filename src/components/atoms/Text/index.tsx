import TextProps from "./types";
import S from "./styles";

const Text = ({ type, children }: TextProps) => {
  const selectType = () => {
    switch (type) {
      case "title":
        return <S.TitleText>{children}</S.TitleText>;
      case "subtitle":
        return <S.SubTitleText>{children}</S.SubTitleText>;
      case "input_label":
        return <S.TitleText>{children}</S.TitleText>;
      case "keep_connect_label":
        return <S.TitleText>{children}</S.TitleText>;
      case "login_problem_label":
        return <S.TitleText>{children}</S.TitleText>;
      case "footer":
        return <S.FooterText>{children}</S.FooterText>;
    }
  };
  return selectType();
};

export default Text;
