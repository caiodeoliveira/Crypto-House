import styled from "styled-components";
import { HomeInnerAreaProps } from "./types";
import { colors } from "../../../styles/mixins";

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
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: ${colors.primary};
  margin-bottom: 20px;
  padding: 5px 0;
`;
/* Header Container Components */
export const CoinMarketCapRankHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const CoinNameImageAndSymbolHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 120px;
`;

export const CoinPriceHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinPercentageDayHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinPercentageWeekHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinMarketCapValueHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)} + 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinVolumeHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const CoinCirculatingSupplyHeaderContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: right;
`;
/* Body Container Components */
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

export const CoinMarketCapRankContainer = styled.div<HomeInnerAreaProps>`
  height: 100%;
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const CoinNameImageAndSymbolContainer = styled.div<HomeInnerAreaProps>`
  width: ${(props) => handleSpaceInnerAreaContainer(props.space)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 20px;
`;

export const CoinsImage = styled.img`
  max-width: 60px;
  max-height: 60px;
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
      return "17%";
    case "price":
      return "10%";
    case "price_change_day":
      return "8%";
    case "price_change_week":
      return "16%";
    case "market_cap":
      return "15%";
    case "volume":
      return "17%";
    case "circulating_supply":
      return "15%";
    default:
      return "5%";
  }
};

export const S = {
  general: {
    Container,
    CoinsListContainer,
    CoinsContainerHeader,
  },

  Header: {
    CoinMarketCapRankHeaderContainer,
    CoinNameImageAndSymbolHeaderContainer,
    CoinPriceHeaderContainer,
    CoinPercentageDayHeaderContainer,
    CoinPercentageWeekHeaderContainer,
    CoinMarketCapValueHeaderContainer,
    CoinVolumeHeaderContainer,
    CoinCirculatingSupplyContainer,
  },
  body: {
    CoinsRowContent,
    CoinMarketCapRankContainer,
    CoinNameImageAndSymbolContainer,
    CoinPriceContainer,
    CoinsImage,
    CoinPercentageDayContainer,
    CoinPercentageWeekContainer,
    CoinMarketCapValueContainer,
    CoinVolumeContainer,
    CoinCirculatingSupplyContainer,
  },
};
