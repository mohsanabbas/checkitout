import React from "react";

interface SpinnerProps {
  message: string;
  height: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ message, height }) => {
  return (
    <div className="Spinner__Wrapper" style={{ height }}>
      <div className="Spinner">
        <div className="Spinner__symbol"></div>
        {message ? <span className="Spinner__message">{message}</span> : null}
      </div>
    </div>
  );
};
