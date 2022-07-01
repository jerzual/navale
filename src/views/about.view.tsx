import React from "react";

interface AboutProps {
  name?: string;
  initialValue?: number;
  path: string;
}

export const AboutView: React.FC<AboutProps> = (props: AboutProps) => {
  let count = 0;
  function increment() {
    count++;
  }
  function decrement() {
    count--;
  }

  count = props.initialValue || 0;

  return (
    <div className="counter">
      <span>
        name: {props.name}, count: {count},
      </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
