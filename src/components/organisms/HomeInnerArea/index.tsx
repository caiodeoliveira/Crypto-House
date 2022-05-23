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
          <S.CoinsListRows key={index}>
            <S.CoinsMarketCapPosition>
              <Text type={"title"}>{crypto.market_cap_rank}</Text>
              <S.CoinsImage src={crypto.image} />
              <Text type={"title"}>{crypto.name}</Text>
              <Text type={"title"}>{crypto.symbol}</Text>
              <Text type={"title"}>{crypto.current_price}</Text>
            </S.CoinsMarketCapPosition>
          </S.CoinsListRows>
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
      <S.CoinsListContainer>{dataLoading()}</S.CoinsListContainer>
    </S.Container>
  );
};
