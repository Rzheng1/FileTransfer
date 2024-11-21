import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal not-italic",
  textmd: "text-[20px] font-normal not-italic",
  textlg: "text-[32px] font-normal not-italic md:text-[30px] sm:text-[28px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-manrope ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
