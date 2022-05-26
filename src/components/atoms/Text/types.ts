type TextTypes =
  | "title"
  | "subtitle"
  | "input_label"
  | "keep_connect_label"
  | "login_problem_label"
  | "footer"
  | "paragraph_text";

export default interface TextProps {
  type: TextTypes;
  children: React.ReactNode;
  color?: string;
}
