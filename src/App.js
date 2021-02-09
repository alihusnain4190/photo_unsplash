import { useEffect, useState } from "react";
import { fetchData } from "./utilss/api";
import "./App.scss";
import Photos from "./Components/Photos";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
  const mainUrl = `https://api.unsplash.com/photos/`;
  const searchUrl = `https://api.unsplash.com/search/photos/`;
  const searchData = async (value) => {
    setQuery(value);
    setPage(1);
  };
  const fetchImages = async () => {
    setLoading(true);
    // let url;
    // const urlPage = `&page=${page}`;
    // const urlQuery = `&query=${query}`;
    // if (query) {
    //   url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    // } else {
    //   url = `${mainUrl}${clientID}${urlPage}`;
    // }
    // fetchData(query, page);
    try {
      // const response = await fetch(url);
      // const data = await response.json();
      const data = await fetchData(query, page);
      setPhotos((prev) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...prev, ...data.results];
        } else {
          return [...prev, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(async () => {
    fetchImages();
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
  if (loading === true) return "...loading";
  return (
    <div className="App">
      <Photos searchData={searchData} data={photos}></Photos>
    </div>
  );
}

export default App;
