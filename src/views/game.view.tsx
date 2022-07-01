import React from "react";

interface GameProps {
  path: string;
  seed?: string;
}

export const GameView: React.FC<GameProps> = () => {
  return <canvas />;
};
