import * as S from "./styles";
import { DrawerMenuProps } from "./types";
import { Divider, ListItem, ListItemIcon } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export const DrawerMenu = ({ open, anchor, elevation }: DrawerMenuProps) => {
  return (
    <S.DrawerComponent open={open} anchor={anchor} elevation={elevation}>
      <S.DrawerList>
        <h1>A</h1>
        <h1>B</h1>
        <h1>C</h1>
        <h1>D</h1>
        <h1>E</h1>
        <h1>F</h1>
        <h1>G</h1>
        <h1>H</h1>
        <h1>I</h1>
        <h1>J</h1>
      </S.DrawerList>
    </S.DrawerComponent>
  );
};
