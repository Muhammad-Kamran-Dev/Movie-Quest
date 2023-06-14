import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardWrapper.css";

const CardWrapper = ({ search }) => {
  const getData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    const filterData = data.filter((item) => {
      return item.original_title.toLowerCase().includes(search);
    });
    return filterData;
  };
  useEffect(() => {
    const setData = async () => {
      const movies = await getData();
      setResults(movies);
    };
    setData();
  }, [search]);

  const [results, setResults] = useState([]);

  return (
    <div className="card-container">
      {results.map((item) => {
        return (
          <Card
            key={item.id}
            overview={item.overview.substring(1, 100)}
            title={item.original_title}
            img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
