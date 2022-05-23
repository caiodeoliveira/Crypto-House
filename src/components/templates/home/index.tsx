import S from "./styles";
import { HomeUpperArea } from "../../organisms/HomeUpperArea";
import { HomeInnerArea } from "../../organisms/HomeInnerArea";

export const Home = () => {
  return (
    <S.Container>
      <HomeUpperArea />
      <HomeInnerArea />
    </S.Container>
  );
};
