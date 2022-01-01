type ButtonTypes = "submit" | "login_problem" | "recover_button";

export default interface ButtonProps {
  id?: string;
  type: ButtonTypes;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}
