import S from "./styles";
import TopBar from "../../atoms/TopBar";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const LoginUpperArea = () => {
  const [highlightsCoins, setHighlightsCoins] = useState<any>([]);

  useEffect(() => {
    api
      .get("/v1/ticker")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Ocorreu um erro na requisição !:" + err);
      });
  });

  return (
    <>
      <S.TopContainer>
        <Text type={"input_label"}>{"2.0.0"}</Text>
        <TopBar>{highlightsCoins}</TopBar>
      </S.TopContainer>
    </>
  );
};

export default LoginUpperArea;
