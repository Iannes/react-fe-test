import React from 'react';
import { GlobalBeerState } from 'Types';

export const useLocalStorage = (id: string | undefined, state: GlobalBeerState) => {
  React.useEffect(() => {
    id &&
      state &&
      state.beerDetails &&
      window.localStorage.setItem(id, JSON.stringify(state.beerDetails))
  }, [state, id])
};
