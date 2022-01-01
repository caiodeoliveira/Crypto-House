import S from "./styles";
import FormLoginContainer from "../../molecules/FormLoginContainer";
import Footer from "../../atoms/Footer";

const LoginInnerArea = () => {
  return (
    <>
      <S.Container>
        <FormLoginContainer />
        <Footer />
      </S.Container>
    </>
  );
};

export default LoginInnerArea;
