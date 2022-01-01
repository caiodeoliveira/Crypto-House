import S from "./styles";
import TopBar from "../../atoms/TopBar";
import React from "react";
import Button from "../../atoms/Button";
import LoginUpperAreaProps from "./types";

const LoginUpperArea = () => {
  const [count, setCount] = React.useState<Number>(0);

  const handleCount = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <S.TopContainer>
      <TopBar>
        <Button onClick={handleCount} type="submit">
          {count}
        </Button>
      </TopBar>
    </S.TopContainer>
  );
};

export default LoginUpperArea;
