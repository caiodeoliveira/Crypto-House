import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const LoginUpperArea = () => {
  const [trendingCoins, setTrendingCoins] = useState<any>([]);

  useEffect(() => {
    api
      .get("")
      .then((response) => {
        console.log(response.data.coins);
        setTrendingCoins(response.data.coins);
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
          {trendingCoins &&
            trendingCoins.map((crypto: any) => (
              <S.TrendingCoinsContent>
                <S.TrendingCoins
                  src={crypto.item.small}
                  alt="trending cryptos"
                />
              </S.TrendingCoinsContent>
            ))}
        </S.TrendingCoinsContainer>
      </S.TopContainer>
    </>
  );
};

export default LoginUpperArea;
