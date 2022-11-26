import { MouseEventHandler, useMemo } from "react";
import { FC } from "react";

type Props = {
  label: string;
  backgroundColor?: string;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg";
  borderRadius?: string;
  outline?: string;
  border?: string;
  width?: string;
  height?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * 汎用的なボタンコンポーネント.
 */
const StyledButton: FC<Props> = (props) => {
  const {
    label,
    backgroundColor = "#f28728",
    color = "#fff",
    size,
    borderRadius,
    outline,
    border,
    width,
    height,
    onClick,
  } = props;

  let scale = 1;
  if (size === "xs") scale = 0.3;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    color,
    borderRadius,
    outline,
    border,
    width,
    height,
    padding: `${scale * 0.3}rem ${scale * 1}rem`,
  };

  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default StyledButton;
