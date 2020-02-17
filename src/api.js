import Axios from "axios";

export const baseUrl = "http://localhost:3000/";

export const fetchData = (success, failure, page, limit, sort) => {
  Axios.get(`${baseUrl}api/products?${sort ? "_sort=" + sort+"&" : ""}_page=${page}&_limit=${limit}`)
    .then(res => success(res))
    .catch(error => failure(error))
  ;
};
