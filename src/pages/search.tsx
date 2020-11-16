import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar/SerchBar";
import axios from "axios";
import { Distributor } from "../components/distributor/Distributor";

interface searchProps {}

export const search: React.FC<searchProps> = ({}) => {
  const [searchTerm, setSearchTerm] = React.useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const {
        data: {
          results: [locations],
        },
      } = await axios.get("http://open.mapquestapi.com/geocoding/v1/address", {
        params: {
          location: searchTerm,
          key: "kYL3NCkh7NBGA1xhaRXipXAg6EM1XLmF",
        },
      });

      setResults(locations.locations[0].latLng);
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <div className="main">
      <SearchBar
        labelText="Insira endreco com numero"
        search={(searchTerm) => setSearchTerm(searchTerm)}
      />
      <Distributor variable={results} />
    </div>
  );
};
export default search;
