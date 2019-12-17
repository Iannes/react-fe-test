import { BeerContextActions, GlobalBeerState } from 'Types';
import { Beer } from 'Types/PunkApi';

export const setDefaults = (beers: Beer[]) => {
  return {
    type: BeerContextActions.SetDefaults,
    payload: {
      beers
    }
  }
}

export const fetchBeerDetails = (beerDetails: Beer[]) => {
  return {
    type: BeerContextActions.GetDetails,
    payload: {
      beerDetails
    }
  }
}

export const clearBeerDetails = (beerDetails: []) => {
  return {
    type: BeerContextActions.ClearDetails,
    payload: {
      beerDetails
    }
  }
}

export const setError = (error: Error) => {
  return {
    type: BeerContextActions.SetError,
    payload: {
      error
    }
  }
}

export const clearError = (error: string | undefined) => {
  return {
    type: BeerContextActions.SetError,
    payload: {
      error
    }
  }
}

export const calculateDifference = (state: GlobalBeerState) => {
  return {
    type: BeerContextActions.CalculateDifference,
    payload: {
      og: state && state.beerDetails && state.beerDetails[0].target_og,
      fg: state && state.beerDetails && state.beerDetails[0].target_fg,
    }
  }
}

export const clearCalculation = (calculation: number) => {
  return {
    type: BeerContextActions.ClearCalculation,
    payload: {
      calculation
    }
  }
}

export const setSearchResults = (beers: Beer[]) => {
  return {
    type: BeerContextActions.SetSearchResults,
    payload: {
      beers,
      isSearching: true
    }
  }
}
export const clearSearchResults = (beers: Beer[]) => {
  return {
    type: BeerContextActions.ClearSearchResults,
    payload: {
      beers,
      isSearching: false
    }
  }
}
