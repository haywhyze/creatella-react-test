import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Contents from './Contents';
import { fetchData } from '../api';
import { insertAd } from '../helpers';
import useInfiniteScroll from './hooks/useInfiniteScroll';

const { Footer } = Layout;

export default function Main() {
  const [products, setProducts] = useState([]);
  const [initialFetching, setInitialFetching] = useState(false);
  const [sort, setSort] = useState('');
  const [lastSeen, setLastSeen] = useState('');
  const [topAd, setTopAd] = useState('');

  const [fetching, setCache, endOfCatalogue, cache] = useInfiniteScroll(
    products,
    setProducts,
    sort,
    lastSeen,
    setLastSeen,
  );

  useEffect(() => {
    setInitialFetching(true);
    setTopAd(Math.floor(Math.random() * 1000));
    setLastSeen(topAd);
    fetchData(
      (res) => {
        setInitialFetching(false);
        const data = res.data.slice(0, 40);
        insertAd(data, lastSeen, setLastSeen);
        setProducts(data);
        setCache(res.data.slice(40));
      },
      (error) => {
        setInitialFetching(false);
        console.log(error);
      },
      1,
      80,
      sort,
    );
    return () => {};
  }, [sort]);

  return (
    <>
      <Layout className="layout">
        <Header />
        <Contents
          products={products}
          fetching={fetching}
          initialFetching={initialFetching}
          endOfCatalogue={endOfCatalogue}
          setSort={setSort}
          topAd={topAd}
          cache={cache}
        />
        <Footer>
          Creatella ©
          {new Date().getFullYear()}
          {' '}
          Created by Yusuf Abdulkarim
        </Footer>
      </Layout>
    </>
  );
}
