import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginTypes } from "../../../services/store/ducks/login/types";
import { ApplicationState } from "../../../services/store/";
export const LoginUpperArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LoginTypes.GET_REQUEST_ALL_COINS });
  }, []);

  const { allCoins } = useSelector((state: ApplicationState) => state.home);

  console.log(allCoins);
  return (
    <>
      <S.TopContainer>
        <Text type={"input_label"}>{"2.0.0"}</Text>
        <S.TrendingCoinsContainer>
          {allCoins &&
            allCoins.map((crypto: any) => (
              <p key={crypto.id} style={{ color: "white" }}>
                {crypto.name}
              </p>
              // <S.TrendingCoinsContent>
              //   <S.TrendingCoins
              //     src={crypto.item.small}
              //     alt="trending cryptos"
              //   />
              //   <S.TrendingSymbol>
              //     <Text
              //       type={"paragraph_text"}
              //     >{`(  ${crypto.item.symbol} )`}</Text>
              //   </S.TrendingSymbol>
              //   <S.TrendingName>
              //     <Text type={"paragraph_text"}>{`${crypto.item.slug}`}</Text>
              //   </S.TrendingName>
              //   <S.TrendingPrice>
              //     <Text type={"paragraph_text"}>
              //       {` BTC ${crypto.item.price_btc.toFixed(17)}`}
              //     </Text>
              //   </S.TrendingPrice>
              // </S.TrendingCoinsContent>
            ))}
        </S.TrendingCoinsContainer>
      </S.TopContainer>
    </>
  );
};
