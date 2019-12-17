import React from 'react';
import BeersDashboard from './Dashboard';
import { useBeerState } from 'Lib/contexts/GlobalBeerContext';
import { fetchBeerPage } from 'Modules/hooks/useFetchBeers';
import Searchbar from 'Modules/components/common/Searchbar';

const BeersDashboardContainer = () => {
  const state = useBeerState();
  const [data, setData] = React.useState(state.beers);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(1)

  const loadBeers = async () => {
    const res = await fetchBeerPage(page);
    if (res.length === 0) {
      setHasMore(false)
    }
    setData((previousData: any) => [...previousData, ...res]);
  };

  React.useEffect(() => {
    if (state.isSearching) {
      setPage(1)
      setHasMore(false)
      return setData(state.beers)
    }
    if (page === 1) {
      return setHasMore(true)
    }
  }, [state.isSearching, data, state.beers])

  React.useEffect(() => {
    loadBeers();
  }, [page])

  React.useEffect(() => {
    setData(state.beers)
  }, [state.beers])

  const handleLoadMore = React.useCallback(() => {
    setPage(page + 1);
  }, [data])


  return (
    <>
      <Searchbar />
      <BeersDashboard
        beers={data}
        handleLoadMore={handleLoadMore}
        hasMore={hasMore}
      />
    </>
  )
};

export default BeersDashboardContainer;
