import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebaseConfig";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<{} | null>(null);
  //Caso dê algo de errado com a funcionalidade, alterar tipagep para <any>;

  const auth = getAuth(app);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setUserState(user);
        sessionStorage.setItem(`@AuthFirebase:token`, `${token}`);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  // return (
  //   <AuthGoogleContext.Provider
  //     value={{ signInGoogle, signed: !!}}
  //   ></AuthGoogleContext.Provider>
  // );
};
