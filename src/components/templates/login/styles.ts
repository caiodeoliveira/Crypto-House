import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";
import Bit from "../../../assets/Bit.png";

const Container = styled.div`
  width: 100vw;
  background: url(${Bit});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  opacity: 0.9;
  filter: brightness(130%);
`;

const TitleText = styled.div`
  font-size: ${typography.subTitle};
  font-family: ${fonts.montserrat.normal};
  color: ${colors.body};
  margin-top: 179px;
`;

const S = {
  Container,
  TitleText,
};

export default S;
