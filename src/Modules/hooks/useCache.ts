import { useBeerState } from 'Lib/contexts/GlobalBeerContext';

export const useCache = (beerName: string) => {

  const state = useBeerState()
  const parsed = JSON.parse(window.localStorage.getItem(beerName) || '{}');     
  const stateBeerDetailObject = state && state.beerDetails && state.beerDetails[0]

  return {
    parsed,
    stateBeerDetailObject
  }
};
