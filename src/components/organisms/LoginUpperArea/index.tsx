import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../services/store";
import { Coins } from "../../../services/store/ducks/login/types";
import { getRequestTrendingCoins } from "../../../services/store/ducks/login/actions";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router";

export const LoginUpperArea = () => {
  const [trending, setTrending] = useState<any[]>([]);

  const dispatch = useDispatch();

  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };

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
        <>
          <h1>Loading... </h1>
          <AiOutlineLoading3Quarters size={40} />
        </>
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
                    <Text type={"input_label"}>
                      {`(  ${crypto.item.symbol} )`}
                    </Text>
                    <Text type={"input_label"}>{`${crypto.item.slug}`}</Text>
                    <Text type={"paragraph_text"}>
                      {` BTC ${crypto.item.price_btc.toFixed(17)}`}
                    </Text>
                  </S.TrendingCoinsContent>
                );
              })
            ) : (
              <AiOutlineLoading3Quarters style={{ color: "white" }} />
            )}
          </S.TrendingCoinsContainer>
          <button
            onClick={() => {
              goHome();
            }}
          >
            <HomeIcon />
          </button>
        </S.TopContainer>
      )}
    </>
  );
};
