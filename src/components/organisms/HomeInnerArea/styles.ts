import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: black;
`;

export const CoinsContainerHeader = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const CoinsListContainer = styled.section`
  display: column;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const CoinsListRows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CoinsMarketCapPosition = styled.div``;
export const CoinsImage = styled.img`
  width: 20%;
`;
export const CoinImageAndName = styled.div``;
export const CoinsSymbol = styled.div``;
export const CoinsPrice = styled.div``;
export const CoinsPriceChangeDay = styled.div``;
export const CoinsPriceChangeWeek = styled.div``;
export const CoinsMarketCapValue = styled.div``;
export const CoinsVolumeDay = styled.div``;
export const CoinsCirculatingSupply = styled.div``;
