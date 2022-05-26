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
    renderInnerArea();
  }, [newCoins]);

  const renderInnerArea = () => {
    if (homeLoad) {
      return <Spin size={70} />;
    } else {
      return coins.map((crypto: Coins, index: number) => {
        return (
          <S.CoinsListContainer key={index}>
            <S.CoinsRowContent>
              <S.MarketCapRankContainer space={"rank"}>
                <Text type={"title"}>{crypto.market_cap_rank}</Text>
              </S.MarketCapRankContainer>
              <S.CoinNameAndImageContainer space={"coin"}>
                <S.CoinsImage src={crypto.image} />
                <Text type={"title"}>{crypto.name}</Text>
                <Text type={"title"}>({crypto.symbol?.toUpperCase()})</Text>
              </S.CoinNameAndImageContainer>
              <S.CoinPriceContainer space={"price"}>
                <Text type={"title"}>
                  ${crypto.current_price?.toLocaleString("en-US")}
                </Text>
              </S.CoinPriceContainer>
              <S.CoinPercentageDayContainer space={"price_change_day"}>
                <Text type={"title"}>
                  {crypto.price_change_percentage_24h?.toFixed(2)}%
                </Text>
              </S.CoinPercentageDayContainer>
              <S.CoinPercentageWeekContainer space={"price_change_week"}>
                <Text type={"title"}>
                  {crypto.price_change_percentage_7d_in_currency?.toFixed(2)}%
                </Text>
              </S.CoinPercentageWeekContainer>
              <S.CoinMarketCapValueContainer space={"market_cap_value"}>
                <Text type={"title"}>{crypto.market_cap?.toFixed(2)}</Text>
              </S.CoinMarketCapValueContainer>
              <S.CoinVolumeContainer space={"volume"}>
                <Text type={"title"}>{crypto.total_volume?.toFixed(2)}%</Text>
              </S.CoinVolumeContainer>
              <S.CoinCirculatingSupplyContainer space={"circulating_supply"}>
                <Text type={"title"}>
                  {crypto.circulating_supply?.toFixed(2)}%
                </Text>
              </S.CoinCirculatingSupplyContainer>
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
      {renderInnerArea()}
    </S.Container>
  );
};
