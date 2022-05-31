import { Drawer, List, withStyles } from "@material-ui/core";

export const DrawerComponent = withStyles({
  root: {},
})(Drawer);

export const DrawerList = withStyles({
  root: {
    display: "flex",
    width: "100%",
    height: "50%",
  },
})(List);
