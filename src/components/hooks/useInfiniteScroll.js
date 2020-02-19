import { useEffect, useState } from 'react';
import { insertAd } from '../../helpers';
import { fetchData } from '../../api';

const useInfiniteScroll = (
  products,
  setProducts,
  sort,
  lastSeen,
  setLastSeen,
) => {
  const [cache, setCache] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [endOfCatalogue, setEndOfCatalogue] = useState(false);

  const loadMore = () => {
    // if last fetch returns less than 40 items and cache is empty abort mission
    if (endOfCatalogue && !cache.length) return;

    setFetching(true);

    // insert ad after every 20 items in cache
    insertAd(cache, lastSeen, setLastSeen);
    // add cache items to products to be displayed
    setProducts([...products, ...cache]);
    // increment page and fetch next batch of data into cache
    setPage(page + 1);
    fetchData(
      (res) => {
        setFetching(false);
        setCache(res.data);
        if (res.data.length < 40) setEndOfCatalogue(true);
      },
      (error) => {
        setFetching(false);
        console.log(error);
      },
      page + 2,
      40, // limit
      sort,
    );
  };

  const handleScroll = () => {
    // if currently fetching, abort mission
    if (fetching) return;
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.querySelector('#root').offsetHeight
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [products, cache, page, fetching, sort]);

  return [fetching, setCache, endOfCatalogue, cache];
};

export default useInfiniteScroll;
