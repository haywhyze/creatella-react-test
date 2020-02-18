import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Contents from "./Contents";
import { fetchData } from "../api";
import { insertAd } from "../helpers";

const { Footer } = Layout;

export default function Main() {
  const [products, setProducts] = useState([]);
  const [cache, setCache] = useState([]);
  const [page, setPage] = useState(1);
  const [initialFetching, setInitialFetching] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [sort, setSort] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [topAd, setTopAd] = useState("");

  const loadMore = () => {
    if (products.length >= 525) return;
    setFetching(true);
    insertAd(cache, lastSeen, setLastSeen);
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
      40,
      sort
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
    setInitialFetching(true);
    setTopAd(Math.floor(Math.random() * 1000));
    setLastSeen(topAd);
    fetchData(
      res => {
        setInitialFetching(false);
        let products = res.data.slice(0, 40);
        insertAd(products, lastSeen, setLastSeen);
        setProducts(products);
        setCache(res.data.slice(40));
      },
      error => {
        setInitialFetching(false);
        console.log(error);
      },
      1,
      80,
      sort
    );
    return () => {};
  }, [sort]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [products, cache, page, fetching, sort]);

  return (
    <>
      <Layout className="layout">
        <Header />
        <Contents
          products={products}
          fetching={fetching}
          initialFetching={initialFetching}
          setSort={setSort}
          topAd={topAd}
        />
        <Footer>
          Creatella ©{new Date().getFullYear()} Created by Yusuf Abdulkarim
        </Footer>
      </Layout>
    </>
  );
}
