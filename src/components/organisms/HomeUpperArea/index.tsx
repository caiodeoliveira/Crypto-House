import React from "react";
import * as S from "./styles";
import { DrawerMenu } from "../../molecules/DrawerMenu";
import { CgMenuRound } from "react-icons/cg";
import Text from "../../atoms/Text";

export const HomeUpperArea = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <S.Container>
        <S.DrawerMenuButtonContainer onClick={toggleDrawer}>
          <CgMenuRound size={30} />
        </S.DrawerMenuButtonContainer>
        <Text type={"welcome_text"}>
          <h1>W</h1>
          <h2>E</h2>
          <h3>L</h3>
          <h4>C</h4>
          <h5>O</h5>
          <h6>M</h6>
          <h6>E</h6>
        </Text>
        <S.VersionContainer>
          <Text type={"welcome_text"}>V.1.2.5</Text>
        </S.VersionContainer>
        <DrawerMenu open={true} anchor={"left"} elevation={200} />
      </S.Container>
    </>
  );
};
