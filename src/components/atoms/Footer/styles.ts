import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const Footer = styled.div`
  background-color: ${colors.primary};
  min-width: 360px;
  min-height: 31px;
  display: flex;
  align-items: center;
  padding: 7px 14.5px;
  position: fixed;
  bottom: 0;
`;

const S = {
  Footer,
};

export default S;
