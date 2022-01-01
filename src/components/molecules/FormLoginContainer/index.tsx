import S from "./styles";
import Checkbox from "../../atoms/CheckBox";
import Text from "../../atoms/Text";

const FormLoginContainer = () => {
  return (
    <>
      <S.FormContainer>
        <S.FormContent>
          <S.LoginLabel htmlFor="my-input" color="secondary">
            <S.LoginInput
              id="my-input"
              aria-describedby="my-helper-text"
              placeholder="Digite seu Email"
            />
          </S.LoginLabel>
          <S.LoginLabel htmlFor="my-input" color="secondary">
            <S.LoginInput
              id="my-input"
              aria-describedby="my-helper-text"
              placeholder="Digite sua senha"
            />
            <S.FormConnectBox>
              <Checkbox />
              <Text type="input_label"> {"Permanecer conectado"}</Text>
            </S.FormConnectBox>
          </S.LoginLabel>
        </S.FormContent>
      </S.FormContainer>
    </>
  );
};

export default FormLoginContainer;
