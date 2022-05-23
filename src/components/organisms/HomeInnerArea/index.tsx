import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../services/store/index";
import { Coins, HomeTypes } from "../../../services/store/ducks/home/types";
import Text from "../../atoms/Text";

export const HomeInnerArea = () => {
  const [coins, setCoins] = useState<Coins[]>([]);

  const homeState = useSelector((state: ApplicationState) => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: HomeTypes.GET_REQUEST_ALL_COINS });
  }, [dispatch]);

  useEffect(() => {
    homeState.newCoins && setCoins(homeState.newCoins);
  }, [homeState]);

  if (homeState.homeLoad) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.Container>
      <S.CoinsContainerHeader>
        <S.CoinsMarketCapPosition>
          <Text type={"title"}>#</Text>
        </S.CoinsMarketCapPosition>
        <S.CoinImageAndName>
          <Text type={"title"}>Coin</Text>
        </S.CoinImageAndName>
        <S.CoinsSymbol>
          <Text type={"title"}>Symbol</Text>
        </S.CoinsSymbol>
        <S.CoinsPrice>
          <Text type={"title"}>Price</Text>
        </S.CoinsPrice>
        <S.CoinsPriceChangeDay>
          <Text type={"title"}>24h %</Text>
        </S.CoinsPriceChangeDay>
        <S.CoinsPriceChangeWeek>
          <Text type={"title"}>7d %</Text>
        </S.CoinsPriceChangeWeek>
        <S.CoinsMarketCapValue>
          <Text type={"title"}>MarketCap</Text>
        </S.CoinsMarketCapValue>
        <S.CoinsVolumeDay>
          <Text type={"title"}>Volume(24h)</Text>
        </S.CoinsVolumeDay>
        <S.CoinsCirculatingSupply>
          <Text type={"title"}>Circulating Supply</Text>
        </S.CoinsCirculatingSupply>
      </S.CoinsContainerHeader>
    </S.Container>
  );
};
