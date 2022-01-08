import S from "./styles";
import TopBar from "../../atoms/TopBar";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const LoginUpperArea = () => {
  const [highlightsCoins, setHighlightsCoins] = useState<number[]>([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setHighlightsCoins(response.data);
      console.log(response.data);
    });
  }, []);

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
