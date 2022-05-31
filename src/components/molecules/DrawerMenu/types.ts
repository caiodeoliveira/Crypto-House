type anchorTypes = "bottom" | "left" | "right" | "top";

export interface DrawerMenuProps {
  open: boolean;
  anchor: anchorTypes;
  elevation: number;
}
