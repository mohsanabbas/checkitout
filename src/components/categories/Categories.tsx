import React from "react";
import { useAllCategoriesSearchQuery } from "../../generated/graphql";

interface CategoriesProps {
  id: any;
  search?: any;
  getCategory?: any;
}

export const Categories: React.FC<CategoriesProps> = ({
  id,
  search,
  getCategory,
}) => {
  const [payload, setPayload] = React.useState(null);

  React.useEffect(() => {
    onTitleClick();
  }, [payload]);

  const onTitleClick = () => {
    getCategory(payload);
  };

  const [res] = useAllCategoriesSearchQuery({
    variables: {
      id,
      search,
      categoryId: payload,
    },
  });

  const renderedItems = res.data?.allCategory?.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="chip__container__chip"
          onClick={() => {
            setPayload(item.id);
          }}
        >
          {item.title}
        </div>
      </React.Fragment>
    );
  });

  return <div className="chip__container">{renderedItems}</div>;
};
