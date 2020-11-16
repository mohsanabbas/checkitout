import React from "react";

interface CardProps {
  imgUrl: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({ imgUrl, title }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <img src={imgUrl} />
      </div>
      <div className="card__separator"></div>
      <div className="card__title">
        <span className="card__title__text">{title}</span>
      </div>
    </div>
  );
};
