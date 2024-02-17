import React from "react";

type Props = {
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ children }: Props) => {
  return <div className="px-8 py-4">{children}</div>;
};

export default MaxWidthWrapper;
