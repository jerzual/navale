import React from "react";

interface WorldProps {
  children: React.ReactNode;
}

export const WorldView: React.FC<WorldProps> = (props: WorldProps) => {
  return <div>&nbsp;{props.children}</div>;
};
