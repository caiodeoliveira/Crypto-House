import { Drawer, List, ListItem, withStyles } from "@material-ui/core";

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
