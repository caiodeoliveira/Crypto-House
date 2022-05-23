import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../services/store/index";
import { Coins, HomeTypes } from "../../../services/store/ducks/home/types";

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
      {coins.map((crypto: Coins, index: number) => {
        return <S.CoinsContainer key={index}></S.CoinsContainer>;
      })}
    </S.Container>
  );
};
