type ButtonTypes = 
| 'submit'

export default interface ButtonProps {
    id?: string;
    type: ButtonTypes,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children?: React.ReactNode;
}