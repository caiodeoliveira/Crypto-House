import S from "./styles";
import CryptoCoin from "../../../assets/CryptoCoin.png";

const TopBar = () => {
  return (
    <S.TopBar>
      <S.IconsContainer>
        <S.MenuIcon />
        <img src={CryptoCoin} />
      </S.IconsContainer>
    </S.TopBar>
  );
};

export default TopBar;
