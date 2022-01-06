import S from "./styles";
import LoginUpperArea from "../../organisms/LoginUpperArea";
import LoginInnerArea from "../../organisms/LoginInnerArea";

const Login = () => {
  return (
    <S.Container>
      <LoginUpperArea />
      <LoginInnerArea />
    </S.Container>
  );
};

export default Login;