import React from "react";

interface NotfoundProps {
  content: string;
}

export const Notfound: React.FC<NotfoundProps> = ({ content }) => {
  return (
    <div className="not__found">
      <div className="not__found__content">
        <h3>{content}</h3>
      </div>
    </div>
  );
};
