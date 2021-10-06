import S from "./styles";
import FormLoginContainer from "../../molecules/FormLoginContainer";
import Footer from "../../atoms/Footer";
import KeepConectLogin from "../../molecules/KeepConectLogin";

const LoginInnerArea = () => {
  return (
    <>
      <S.Container>
        <FormLoginContainer />
        <Footer />
        <KeepConectLogin />
      </S.Container>
    </>
  );
};

export default LoginInnerArea;
