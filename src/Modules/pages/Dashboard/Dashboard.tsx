import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './dashboard.module.scss';
import { Beer as BeerType } from 'Types/PunkApi';
import Beer from 'Modules/components/Beer';
import { useBeerState } from 'Lib/contexts/GlobalBeerContext';
import Emoji from 'Modules/components/common/Emoji';

type BeersDashboardProps = {
  beers: BeerType[] | undefined;
  handleLoadMore: () => void;
  hasMore: boolean
}

const BeersDashboard: React.FC<BeersDashboardProps> = ({ beers, handleLoadMore, hasMore = true }) => {
  const state = useBeerState();
  const [hide, setHide] = React.useState(false)

  React.useEffect(() => {
    if (!hasMore) {
      const hideMessage = setTimeout(() => setHide(true), 5000);
      return () => {
        clearTimeout(hideMessage);
      }
    }
    setHide(false)
  })

  return (
    <InfiniteScroll
      pageStart={state.page}
      loadMore={handleLoadMore}
      hasMore={hasMore}
      loader={<div className="loader" key={state.page}>Loading...</div>}
    >
      <section className={styles.container}>
        <article className={styles.beers}>
          {beers && beers.map((beer: BeerType, index: number) => (
            <Beer key={index} beer={beer} />
          ))}
          {!hasMore && <p className={hide ? styles.hide : styles.endOfScroll}><Emoji /> You have reached the end <Emoji /></p>}
        </article>
      </section>
    </InfiniteScroll>
  );
};

export default BeersDashboard;
