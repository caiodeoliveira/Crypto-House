import S from "./styles";
import FormLoginContainer from "../../molecules/FormLoginContainer";
import Footer from "../../atoms/Footer";
import CheckBoxInput from "../../atoms/CheckBox";

const LoginInnerArea = () => {
  return (
    <>
      <S.Container>
        <FormLoginContainer />
        <Footer />
        <CheckBoxInput />
      </S.Container>
    </>
  );
};

export default LoginInnerArea;
