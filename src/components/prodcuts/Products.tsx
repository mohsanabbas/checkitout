import React, { Fragment } from "react";
import { usePocQuery } from "../../generated/graphql";
import { Card } from "../card/Card";
import { Notfound } from "../notfound/Notfound";
import { Spinner } from "../Spinner/Spinner";

interface ProductsProps {
  id: string;
  search: string;
  categoryId: any;
}

export const Products: React.FC<ProductsProps> = ({
  id,
  search,
  categoryId,
}) => {
  const [res] = usePocQuery({
    variables: {
      id,
      search,
      categoryId,
    },
  });
  if (res.fetching) return <Spinner message="loading" height="10px" />;
  if (res.error)
    return <Notfound content="Not found any product to related category" />;

  return (
    <div className="product__container">
      {res.data?.poc?.products.map((card) => {
        return (
          <div key={card.id} className="product__container__item">
            <Card imgUrl={card.images[0].url} title={card.title} />
          </div>
        );
      })}
    </div>
  );
};
