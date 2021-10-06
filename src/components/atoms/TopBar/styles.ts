import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { colors, typography, fonts } from "../../../styles/mixins";

const TopBar = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  background-color: ${colors.primary};
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MenuIcon = styled(AiOutlineMenu)`
  min-width: 35px;
  min-height: 40px;
  margin: 14px 100px 15px 14px;
  color: ${colors.body};
`;

const S = {
  TopBar,
  IconsContainer,
  MenuIcon,
};

export default S;
