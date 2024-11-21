import React from "react";

const sizes = {
  texts: "text-[16px] font-medium",
  headingxs: "text-[14px] font-bold",
  headings: "text-[16px] font-semibold",
  headingmd: "text-[20px] font-bold",
  headinglg: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
};

const Heading = ({
  children,
  className = "",
  size = "texts",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-700 font-manrope ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
