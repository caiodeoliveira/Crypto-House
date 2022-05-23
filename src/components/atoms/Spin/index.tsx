import { SpinProps } from "./types";
import * as S from "./styles";

export const Spin = ({ size }: SpinProps) => {
  return (
    <S.SpinContainer>
      <S.SpinComponent size={size} />;
    </S.SpinContainer>
  );
};
