import { S } from "./styles";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCoins]);

  const renderInnerArea = () => {
    if (homeLoad) {
      return <Spin size={70} />;
    } else {
      return coins.map((crypto: Coins, index: number) => {
        return (
          <S.general.CoinsListContainer key={index}>
            <S.body.CoinsRowContent>
              <S.body.CoinMarketCapRankContainer space={"rank"}>
                <Text type={"title"}>{crypto.market_cap_rank}</Text>
              </S.body.CoinMarketCapRankContainer>
              <S.body.CoinNameImageAndSymbolContainer space={"coin"}>
                <S.body.CoinsImage src={crypto.image} />
                <Text type={"title"}>{crypto.name}</Text>
                <Text type={"title"}>({crypto.symbol?.toUpperCase()})</Text>
              </S.body.CoinNameImageAndSymbolContainer>
              <S.body.CoinPriceContainer space={"price"}>
                <Text type={"title"}>
                  ${crypto.current_price?.toLocaleString("en-US")}
                </Text>
              </S.body.CoinPriceContainer>
              <S.body.CoinPercentageDayContainer space={"price_change_day"}>
                <Text
                  type={"title"}
                  color={
                    crypto.price_change_percentage_24h == null ||
                    crypto.price_change_percentage_24h >= 0
                      ? "#169916"
                      : "#E84C4C"
                  }
                >
                  {crypto.price_change_percentage_24h?.toFixed(2)}%
                </Text>
              </S.body.CoinPercentageDayContainer>
              <S.body.CoinPercentageWeekContainer space={"price_change_week"}>
                <Text
                  type={"title"}
                  color={
                    crypto.price_change_percentage_24h == null ||
                    crypto.price_change_percentage_24h >= 0
                      ? "#169916"
                      : "#E84C4C"
                  }
                >
                  {crypto.price_change_percentage_7d_in_currency?.toFixed(2)}%
                </Text>
              </S.body.CoinPercentageWeekContainer>
              <S.body.CoinMarketCapValueContainer space={"market_cap_value"}>
                <Text type={"title"}>{crypto.market_cap?.toFixed(2)}</Text>
              </S.body.CoinMarketCapValueContainer>
              <S.body.CoinVolumeContainer space={"volume"}>
                <Text type={"title"}>{crypto.total_volume?.toFixed(2)}%</Text>
              </S.body.CoinVolumeContainer>
              <S.body.CoinCirculatingSupplyContainer
                space={"circulating_supply"}
              >
                <Text type={"title"}>
                  {crypto.circulating_supply?.toFixed(2)}%
                </Text>
              </S.body.CoinCirculatingSupplyContainer>
            </S.body.CoinsRowContent>
          </S.general.CoinsListContainer>
        );
      });
    }
  };
  return (
    <S.general.Container>
      <S.general.CoinsContainerHeader>
        <S.Header.CoinMarketCapRankHeaderContainer space={"rank"}>
          <Text type={"title"}>#</Text>
        </S.Header.CoinMarketCapRankHeaderContainer>
        <S.Header.CoinNameImageAndSymbolHeaderContainer space={"coin"}>
          <Text type={"title"}>Coin</Text>
          <Text type={"title"}>Symbol</Text>
        </S.Header.CoinNameImageAndSymbolHeaderContainer>
        <S.Header.CoinPriceHeaderContainer space={"price"}>
          <Text type={"title"}>Price</Text>
        </S.Header.CoinPriceHeaderContainer>
        <S.Header.CoinPercentageDayHeaderContainer space={"price_change_day"}>
          <Text type={"title"}>24h %</Text>
        </S.Header.CoinPercentageDayHeaderContainer>
        <S.Header.CoinPercentageWeekHeaderContainer space={"price_change_week"}>
          <Text type={"title"}>7d %</Text>
        </S.Header.CoinPercentageWeekHeaderContainer>
        <S.Header.CoinMarketCapValueHeaderContainer space={"market_cap_value"}>
          <Text type={"title"}>Market Cap</Text>
        </S.Header.CoinMarketCapValueHeaderContainer>
        <S.Header.CoinVolumeHeaderContainer space={"volume"}>
          <Text type={"title"}>Volume(24h)</Text>
        </S.Header.CoinVolumeHeaderContainer>
        <S.Header.CoinCirculatingSupplyContainer space={"circulating_supply"}>
          <Text type={"title"}>Circulating Supply</Text>
        </S.Header.CoinCirculatingSupplyContainer>
      </S.general.CoinsContainerHeader>
      {renderInnerArea()}
    </S.general.Container>
  );
};
