import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../services/store";
import { Coins } from "../../../services/store/ducks/login/types";
import { getRequestTrendingCoins } from "../../../services/store/ducks/login/actions";

export const LoginUpperArea = () => {
  const [trending, setTrending] = useState<any[]>([]);

  const dispatch = useDispatch();

  const loginGlobalState = useSelector(
    (state: ApplicationState) => state.login
  );

  useEffect(() => {
    dispatch(getRequestTrendingCoins());
  }, [dispatch]);

  useEffect(() => {
    loginGlobalState.trendingCoins.coins &&
      setTrending(loginGlobalState.trendingCoins.coins);
  }, [loginGlobalState]);

  return (
    <>
      {loginGlobalState.loginLoad ? (
        <h1>loading...</h1>
      ) : (
        <S.TopContainer>
          <Text type={"input_label"}>{"2.0.0"}</Text>
          <S.TrendingCoinsContainer>
            {trending ? (
              trending.map((crypto: Coins, index: number) => {
                return (
                  <S.TrendingCoinsContent key={index}>
                    <S.TrendingCoins
                      src={crypto.item.small}
                      alt="trending cryptos"
                    />
                    <S.TrendingSymbol>
                      {`(  ${crypto.item.symbol} )`}
                    </S.TrendingSymbol>
                    <S.TrendingName>{`${crypto.item.slug}`}</S.TrendingName>
                    <S.TrendingPrice>
                      {` BTC ${crypto.item.price_btc.toFixed(17)}`}
                    </S.TrendingPrice>
                  </S.TrendingCoinsContent>
                );
              })
            ) : (
              <AiOutlineLoading3Quarters style={{ color: "white" }} />
            )}
          </S.TrendingCoinsContainer>
        </S.TopContainer>
      )}
    </>
  );
};
