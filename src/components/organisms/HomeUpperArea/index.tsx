import React, { useEffect } from "react";
import * as S from "./styles";
import { DrawerMenu } from "../../molecules/DrawerMenu";
import { CgMenuRound } from "react-icons/cg";
import Text from "../../atoms/Text";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SignInAppContainer } from "../../molecules/SignInAppContainer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "../../atoms/Button";

export const HomeUpperArea = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [isUserLogged, setIsUserLogged] = React.useState<boolean>(false);

  //Criei duas actions para logar e para deslogar o usuário. Implementá-las no
  // Componente amanhã.

  const auth = getAuth();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onSignOut = () => {
    signOut(auth);
    console.log("You Signed Off");
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("User is Logged -> ", uid);
      setIsUserLogged(true);
    } else {
      console.log("User is Signed Off");
    }
  });

  const showSignInOpt = () => {
    return <SignInAppContainer />;
  };

  return (
    <S.Container>
      {isUserLogged ? (
        <>
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

          <S.SignOffContainer>
            <Text type={"log_out_text"} margin={"0 0 0 20px"}>
              Log Out
            </Text>
            <S.SignOffButton button={true} onClick={() => onSignOut()}>
              <ExitToAppIcon fontSize="large" />
            </S.SignOffButton>
          </S.SignOffContainer>

          <DrawerMenu
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            anchor={"left"}
            elevation={200}
          />
        </>
      ) : (
        showSignInOpt()
      )}
    </S.Container>
  );
};
