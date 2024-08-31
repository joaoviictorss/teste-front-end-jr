import "./styles.scss";

import { ComponentProps } from "react";

const Button = ({
  className,
  children,
  ...props
}: ComponentProps<"button">) => (
  <button className={"button " + className} {...props}>
    {children}
  </button>
);

export default Button;
