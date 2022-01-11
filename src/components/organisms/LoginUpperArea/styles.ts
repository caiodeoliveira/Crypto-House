import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const TopContainer = styled.div`
  background-color: ${colors.dark};
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TrendingCoinsContainer = styled.div`
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.dark};
  border-top: 0.3px solid white;
  border-bottom: 0.3px solid white;
  border-radius: 5px;
  display: flex;
  width: 80%;
  height: 80%;
  margin-right: 40px;
`;

const TrendingCoins = styled.img``;

const S = {
  TopContainer,
  TrendingCoinsContainer,
  TrendingCoins,
};

export default S;
