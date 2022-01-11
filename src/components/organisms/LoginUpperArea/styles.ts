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
  background-color: ${colors.dark};
  border-top: 0.3px solid white;
  border-bottom: 0.3px solid white;
  border-radius: 5px;
  display: flex;
  width: 80%;
  height: 80%;
  margin-right: 40px;
  display: flex;
  align-items: center;
`;

const TrendingCoinsContent = styled.div``;

const TrendingCoins = styled.img`
  margin-left: 100px;
`;

const S = {
  TopContainer,
  TrendingCoinsContainer,
  TrendingCoinsContent,
  TrendingCoins,
};

export default S;
