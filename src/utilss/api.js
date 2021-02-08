import axios from "axios";
export const fetchData = async (value, page) => {
  const api = "https://api.unsplash.com/photos/";
  const search_api = "https://api.unsplash.com/search/photos/";
  const mainURL = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
  if (value === "") {
    const { data } = await axios.get(`${api}${mainURL}&page=${page}`);
    return data;
  } else {
    const { data } = await axios.get(
      `${search_api}${mainURL}&page=${page}&query=${value}`
    );
    return data;
  }
};
export const getchSearchData = async (searchValue) => {
  const api = "https://api.unsplash.com/photos/";
  const mainURL = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  const { data } = await axios.get(`${api}${mainURL}`);
  return data;
};
