import styled from "styled-components";
import { HomeInnerAreaProps } from "./types";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
`;

export const CoinsContainerHeader = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  background-color: blue;
  margin-bottom: 20px;
`;

export const CoinsListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
`;

export const CoinsRowContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const MarketCapRankContainer = styled.div<HomeInnerAreaProps>`
  height: 100%;
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const CoinNameAndImageContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;

export const CoinsImage = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

export const CoinSymbolContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinPriceContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinPercentageDayContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinPercentageWeekContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinMarketCapValueContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinVolumeContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const CoinCirculatingSupplyContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const handleSpaceInnerAreaContainer = (space: string) => {
  switch (space) {
    case "market_cap_rank":
      return "2%";
    case "coin":
      return "23%";
    case "price":
      return "10%";
    case "price_change_day":
      return "8%";
    case "price_change_week":
      return "8%";
    case "market_cap":
      return "17%";
    case "volume":
      return "17%";
    case "circulating_supply":
      return "15%";
    default:
      return "5%";
  }
};
