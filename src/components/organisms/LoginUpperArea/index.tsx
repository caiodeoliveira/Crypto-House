import S from "./styles";
import TopBar from "../../atoms/TopBar";
import Text from "../../atoms/Text";
const LoginUpperArea = () => {
  return (
    <>
      <S.TopContainer>
        <Text type={"input_label"}>{"2.0.0"}</Text>
        <TopBar></TopBar>
      </S.TopContainer>
    </>
  );
};
export default LoginUpperArea;
