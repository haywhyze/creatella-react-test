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
    if (products.length >= 525) return;
    setFetching(true);
    insertAd(cache, lastSeen, setLastSeen);
    setProducts([...products, ...cache]);
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
      40,
      sort,
    );
  };

  const handleScroll = () => {
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
