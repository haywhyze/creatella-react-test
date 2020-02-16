import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Axios from "axios";
import Header from "./Header";
import Contents from "./Contents";
import { fetchData } from "../api";

const { Footer } = Layout;

export default function Main() {
  const [products, setProducts] = useState([]);
  const [cache, setCache] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const loadMore = () => {
    setFetching(true);
    setProducts([...products, ...cache]);
    setPage(page + 1);
    fetchData(
      res => {
        setFetching(false), setCache(res.data);
      },
      error => {
        setFetching(false);
        console.log(error);
      },
      page + 2,
      40
    );
  };

  const handleScroll = () => {
    if (fetching) return;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.querySelector("#root").offsetHeight
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    setFetching(true);
    fetchData(
      res => {
        setFetching(false);
        setProducts(res.data.slice(0, 40));
        setCache(res.data.slice(40));
      },
      error => {
        setFetching(false);
        console.log(error);
      },
      1,
      80
    );
    return () => {};
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [products, cache, page, fetching]);

  return (
    <>
      <Layout className="layout">
        <Header />
        <Contents products={products} fetching={fetching} />
        <Footer>
          Creatella ©{new Date().getFullYear()} Created by Yusuf Abdulkarim
        </Footer>
      </Layout>
    </>
  );
}
