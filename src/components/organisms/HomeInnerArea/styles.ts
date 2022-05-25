import styled from "styled-components";
import { HomeInnerAreaProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: black;
`;

export const CoinsContainerHeader = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  justify-content: space-evenly;
`;

export const CoinNameAndImageContainer = styled.div<HomeInnerAreaProps>`
  height: 100%;
  width: ${(props) => handleSpaceContainer(props.space)};
  display: flex;
  align-items: center;
`;

export const CoinsImage = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

const handleSpaceContainer = (space: string) => {
  switch (space) {
    case "market_cap_rank":
      return "2%";
    case "coin":
      return "15%";
    case "symbol":
      return "3%";
    case "price":
      return "10%";
    case "price_change_day":
      return "5%";
    case "price_change_week":
      return "5%";
    case "market_cap":
      return "5%";
    case "volume":
      return "5%";
    case "circulating_supply":
      return "5%";
    default:
      return "5%";
  }
};
