import styled from "styled-components";

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
  justify-content: space-evenly;
  align-items: center;
`;

export const CoinNameAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoinsImage = styled.img`
  max-width: 80px;
  max-height: 80px;
`;
