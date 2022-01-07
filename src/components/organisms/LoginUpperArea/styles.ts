import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const TopContainer = styled.div`
  background-color: ${colors.dark};
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & p: {
    border-bottom: 1px solid white;
  }
`;

const S = {
  TopContainer,
};

export default S;
