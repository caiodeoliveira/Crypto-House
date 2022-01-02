import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { colors } from "../../../styles/mixins";

const TopBar = styled.div`
  background-color: ${colors.dark};
  width: 200px;
`;

const MenuIcon = styled(AiOutlineMenu)`
  min-width: 35px;
  min-height: 40px;
  margin: 14px 100px 15px 14px;
  color: ${colors.body};
`;

const S = {
  TopBar,
  MenuIcon,
};

export default S;
