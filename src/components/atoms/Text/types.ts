type TextTypes =
  | "title"
  | "subtitle"
  | "input_label"
  | "keep_connect_label"
  | "login_problem_label"
  | "footer";

export default interface TextProps {
  type: TextTypes;
  children: React.ReactNode;
}
