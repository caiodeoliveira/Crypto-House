import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";

const TitleText = styled.div`
  font-size: ${typography.subTitle};
  font-family: ${fonts.montserrat.bold};
  color: ${colors.dark};
  margin-top: 50px;
`;

const S = {
  TitleText,
};

export default S;
