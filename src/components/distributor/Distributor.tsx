import React from "react";
import { usePocSearchMethodQuery } from "../../generated/graphql";
import { Categories } from "../categories/Categories";
import { Notfound } from "../notfound/Notfound";
import { Products } from "../prodcuts/Products";
import { Spinner } from "../Spinner/Spinner";

interface DistributorProps {
  variable: any;
}

export const Distributor: React.FC<DistributorProps> = ({ variable }) => {
  const [category, setCategory] = React.useState(null);

  const dateNow = new Date().toISOString();
  // custom hook
  function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const [res] = usePocSearchMethodQuery({
    variables: {
      algorithm: "NEAREST",
      lat: variable.lat,
      long: variable.lng,
      now: usePrevious(dateNow),
    },
  });
  if (res.fetching) return <Spinner message="loading" height="10px" />;
  if (res.error)
    return <Notfound content="Please provide the correct address!" />;
  return (
    <div>
      {res.data?.pocSearch.map((item) => {
        return (
          <div key={item.id} className="section">
            <div className="section__categories">
              <Categories
                id={item.id}
                search={""}
                getCategory={(category) => setCategory(category)}
              />
            </div>
            <div className="section__product">
              <Products id={item.id} search={""} categoryId={category} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
