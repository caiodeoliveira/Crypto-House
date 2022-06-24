type anchorTypes = "bottom" | "left" | "right" | "top";

export interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
  anchor: anchorTypes;
  elevation: number;
}
