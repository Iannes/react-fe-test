import * as React from 'react';
import { BeerReducer } from '../reducers/beerReducer'
import {
  GlobalBeerState,
  GlobalBeerDispatch,
  ContextChildren,
} from 'Types';


const InitialGlobalBeerState: GlobalBeerState = {
  beers: [],
  page: 0,
  loading: false,
  error: undefined,
};

const BeerStateContext = React.createContext<GlobalBeerState | undefined>(undefined);
const BeerDispatchContext = React.createContext<GlobalBeerDispatch | undefined>(undefined);


const BeerProvider: ContextChildren = ({ children }) => {
  const [state, dispatch] = React.useReducer(BeerReducer, InitialGlobalBeerState);
  return (
    <BeerStateContext.Provider value={state}>
      <BeerDispatchContext.Provider value={dispatch}>{children}</BeerDispatchContext.Provider>
    </BeerStateContext.Provider>
  );
};

const useBeerState = () => {
  const context = React.useContext(BeerStateContext);
  if (context === undefined) {
    throw new Error('useBeerState must be used within a BeerProvider');
  }
  return context;
}

const useBeerDispatch = () => {
  const context = React.useContext(BeerDispatchContext);
  if (context === undefined) {
    throw new Error('useBeerDispatch must be used within a BeerProvider');
  }
  return context;
}

export { BeerProvider, useBeerState, useBeerDispatch };
