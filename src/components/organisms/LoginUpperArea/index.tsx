import React from "react";
import S from "./styles";
import TopBar from "../../atoms/TopBar";
import Button from "../../atoms/Button";

const LoginUpperArea = () => {
  return (
    <>
      <S.TopContainer>
        <TopBar>
          <Button onClick={() => {}} type="submit">
            Submit
          </Button>
        </TopBar>
      </S.TopContainer>
    </>
  );
};
export default LoginUpperArea;
