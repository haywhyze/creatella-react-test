import Axios from "axios";

export const baseUrl = "http://localhost:3000/";

export const fetchData = (success, failure, page, limit) => {
  Axios.get(`${baseUrl}api/products?_page=${page}&_limit=${limit}`)
    .then(res => success(res))
    .catch(error => failure(error))
  ;
};
