import axios from "axios";
export const fetchData = async () => {
  const api = "https://api.unsplash.com/photos/";
  const mainURL = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  const { data } = await axios.get(`${api}${mainURL}`);
  return data;
};
export const getchSearchData=async(searchValue)=>{
  const api = "https://api.unsplash.com/photos/";
  const mainURL = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  const { data } = await axios.get(`${api}${mainURL}`);
  return data;
}