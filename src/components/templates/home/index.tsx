import S from "./styles";
import { HomeUpperArea } from "../../organisms/HomeUpperArea";
import { HomeInnerArea } from "../../organisms/HomeInnerArea";
import React, { useEffect } from "react";

export const Home = () => {
  const [isUserLogged, setIsUserLogged] = React.useState<boolean>(false);

  useEffect(() => {
    console.log("User is ->", isUserLogged);
  }, [isUserLogged]);

  return (
    <S.Container>
      <HomeUpperArea />
      <HomeInnerArea />
    </S.Container>
  );
};
