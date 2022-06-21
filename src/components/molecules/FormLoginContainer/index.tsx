import S from "./styles";
import Checkbox from "../../atoms/CheckBox";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../../../services/firebaseConfig";
import { useHistory } from "react-router-dom";
import FcGoogle from "react-icons/fc";

const provider = new GoogleAuthProvider();

const FormLoginContainer = () => {
  const auth = getAuth(app);
  const history = useHistory();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        history.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const userInfo = auth.currentUser;

  return (
    <>
      <S.FormContainer>
        <S.FormContent>
          <S.LoginInput
            id="my-input-user"
            color={"secondary"}
            required={true}
            aria-describedby="my-helper-user"
            placeholder="Type your username"
          />
          <S.LoginInput
            id="my-input-password"
            color={"secondary"}
            required={true}
            aria-describedby="my-helper-password"
            placeholder="Type your Password"
            type={"password"}
          />
          <Button onClick={() => {}} type="submit">
            Login
          </Button>
          <button onClick={signInWithGoogle}>Login With Google</button>
        </S.FormContent>
        <S.FormConnectBox>
          <Checkbox />
          <Text type="input_label"> {"Keep Logged"}</Text>
        </S.FormConnectBox>
      </S.FormContainer>
    </>
  );
};

export default FormLoginContainer;
