import { Drawer, List, ListItem, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const DrawerComponent = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(Drawer);

export const DrawerList = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(List);

export const ItemList = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    marginRight: "25px",
    height: "100%",
  },
})(ListItem);

export const VersionContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 40px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;
