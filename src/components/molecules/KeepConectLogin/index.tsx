import React from "react";
import S from "./styles";
import Checkbox from "../../atoms/CheckBox";
import Text from "../../atoms/Text";

const KeepConectLogin = () => {
  return (
    <S.Container>
      <Checkbox />
      <Text type="input_label"> {"Permanecer conectado"}</Text>
    </S.Container>
  );
};

export default KeepConectLogin;
