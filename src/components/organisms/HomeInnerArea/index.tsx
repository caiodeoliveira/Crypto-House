import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../services/store/index";
import { Coins, HomeTypes } from "../../../services/store/ducks/home/types";
import Text from "../../atoms/Text";
import { Spin } from "../../atoms/Spin";

export const HomeInnerArea = () => {
  const [coins, setCoins] = useState<Coins[]>([]);

  const { homeLoad, newCoins } = useSelector(
    (state: ApplicationState) => state.home
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: HomeTypes.GET_REQUEST_ALL_COINS });
  }, [dispatch]);

  useEffect(() => {
    newCoins && setCoins(newCoins);
    dataLoading();
  }, [newCoins]);

  const dataLoading = () => {
    if (homeLoad) {
      return <Spin size={70} />;
    } else {
      return coins.map((crypto: Coins, index: number) => {
        return (
          <S.CoinsListContainer key={index}>
            <S.CoinsRowContent>
              <Text type={"title"}>{crypto.market_cap_rank}</Text>
              <S.CoinNameAndImageContainer space={"coin"}>
                <S.CoinsImage src={crypto.image} />
                <Text type={"title"}>{crypto.name}</Text>
              </S.CoinNameAndImageContainer>
              <Text type={"title"}>({crypto.symbol?.toUpperCase()})</Text>
              <Text type={"title"}>
                ${crypto.current_price?.toLocaleString("en-US")}
              </Text>
              <Text type={"title"}>
                {crypto.price_change_percentage_24h?.toFixed(2)}%
              </Text>
              <Text type={"title"}>
                {crypto.price_change_percentage_7d_in_currency?.toFixed(2)}%
              </Text>
              <Text type={"title"}>{crypto.market_cap?.toFixed(2)}%</Text>
              <Text type={"title"}>{crypto.total_volume?.toFixed(2)}%</Text>
              <Text type={"title"}>
                {crypto.circulating_supply?.toFixed(2)}%
              </Text>
            </S.CoinsRowContent>
          </S.CoinsListContainer>
        );
      });
    }
  };
  return (
    <S.Container>
      <S.CoinsContainerHeader>
        <Text type={"title"}>#</Text>
        <Text type={"title"}>Coin</Text>
        <Text type={"title"}>Symbol</Text>
        <Text type={"title"}>Price</Text>
        <Text type={"title"}>24h %</Text>
        <Text type={"title"}>7d %</Text>
        <Text type={"title"}>Market Cap</Text>
        <Text type={"title"}>Volume(24h)</Text>
        <Text type={"title"}>Circulating Supply</Text>
      </S.CoinsContainerHeader>
      {dataLoading()}
    </S.Container>
  );
};
