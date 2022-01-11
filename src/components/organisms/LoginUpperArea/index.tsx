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
        console.log(response.data.coins);
        setHighlightsCoins(response.data.coins);
      })
      .catch((err) => {
        console.log("Ocorreu um erro na requisição !:" + err);
      });
  }, []);

  return (
    <>
      <S.TopContainer>
        <Text type={"input_label"}>{"2.0.0"}</Text>
        <S.TrendingCoinsContainer>
          {highlightsCoins &&
            highlightsCoins.map((crypto: any) => (
              <S.TrendingCoins src={crypto.item.small} alt="trending cryptos" />
            ))}
        </S.TrendingCoinsContainer>
      </S.TopContainer>
    </>
  );
};

export default LoginUpperArea;
