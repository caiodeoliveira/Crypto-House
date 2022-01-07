import S from "./styles";
import TopBar from "../../atoms/TopBar";
import Text from "../../atoms/Text";
import axios from "axios";
import { useState } from "react";

const baseURL = "https://api.crypto.com/";

const LoginUpperArea = () => {
  const [highlightsCoins, sethighlightsCoins] = useState<number[]>([]);

  return (
    <>
      <S.TopContainer>
        <Text type={"input_label"}>{"2.0.0"}</Text>
        <TopBar></TopBar>
      </S.TopContainer>
    </>
  );
};
export default LoginUpperArea;
