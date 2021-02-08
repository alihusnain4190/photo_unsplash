import { useEffect, useState } from "react";
import { fetchData } from "./utilss/api";
import "./App.scss";
import Photos from "./Components/Photos";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const searchData = async (value) => {
    const { results } = await fetchData(value, page);
    setLoading(false);
    console.log(results);
    setPage(1);
    setData((prev) => {
      return [...prev, ...results];
    });
  };
  useEffect(async () => {
    const result = await fetchData("", page);
    setLoading(false);
    setData((prev) => {
      return [...prev, ...result];
    });
  }, [page]);
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setPage((prev) => {
          return prev + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  if (isLoading === true) return "...loading";
  return (
    <div className="App">
      <Photos searchData={searchData} data={data}></Photos>
    </div>
  );
}

export default App;
