import React from "react";

interface RadarProps {
  children: React.ReactNode;
}

export const RadarView: React.FC<RadarProps> = ({ children }) => {
  return <>Radar view {children}</>;
}
