import { useEffect, useState } from "react";
import { fetchData } from "./utilss/api";
import "./App.scss";
import Photos from "./Components/Photos";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const searchData = (value) => {
    console.log(value);
  };
  useEffect(async () => {
    const result = await fetchData();
    setLoading(false);
    setData(result);
  }, []);
  if (isLoading === true) return "...loading";
  return (
    <div className="App">
      <Photos searchData={searchData} data={data}></Photos>
    </div>
  );
}

export default App;
