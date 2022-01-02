import S from "./styles";
import Checkbox from "../../atoms/CheckBox";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";

const FormLoginContainer = () => {
  return (
    <>
      <S.FormContainer>
        <S.FormContent>
          <S.LoginInput
            id="my-input"
            aria-describedby="my-helper-text"
            placeholder="Digite seu Email"
          />
          <S.LoginInput
            id="my-input"
            aria-describedby="my-helper-text"
            placeholder="Digite sua senha"
          />
          <Button onClick={() => {}} type="submit">
            Login
          </Button>
        </S.FormContent>
        <S.FormConnectBox>
          <Checkbox />
          <Text type="input_label"> {"Permanecer conectado"}</Text>
        </S.FormConnectBox>
      </S.FormContainer>
    </>
  );
};

export default FormLoginContainer;
