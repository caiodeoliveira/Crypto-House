import { fonts, typography } from "../../../styles/mixins";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  font-weight: ${fonts.montserrat.bold};
`;

const S = {
  Container,
};

export default S;
