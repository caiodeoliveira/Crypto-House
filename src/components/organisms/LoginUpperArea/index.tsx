import S from "./styles";
import TopBar from "../../atoms/TopBar";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const LoginUpperArea = () => {
  const [highlightsCoins, setHighlightsCoins] = useState<any>([]);

  useEffect(() => {
    api
      .get("")
      .then((response) => {
        console.log(response.data);
        setHighlightsCoins(response.data);
      })
      .catch((err) => {
        console.log("Ocorreu um erro na requisição !:" + err);
      });
  });

  return (
    <>
      <S.TopContainer>
        <Text type={"input_label"}>{"2.0.0"}</Text>
        <TopBar>
          {highlightsCoins &&
            highlightsCoins.map((cryptos: any) => (
              <img src={cryptos.image.small} alt="Crypto Symbols" />
            ))}
        </TopBar>
      </S.TopContainer>
    </>
  );
};

export default LoginUpperArea;
