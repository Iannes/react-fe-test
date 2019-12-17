import { GlobalBeerAction } from 'actions';
import { GlobalBeerState, BeerContextActions } from 'Types';

export const BeerReducer = (state: GlobalBeerState, action: GlobalBeerAction): GlobalBeerState => {
  switch (action.type) {
    case BeerContextActions.SetDefaults:
      return {
        ...state,
        beers: action && action.payload && action.payload.beers && state.beers && [...state.beers, ...action.payload.beers],
        isSearching: false
      };
    case BeerContextActions.SetSearchResults:
      return {
        ...state,
        beers: action && action.payload && action.payload.beers && action.payload.beers,
        isSearching: action && action.payload && action.payload.isSearching && action.payload.isSearching,
      };
    case BeerContextActions.ClearSearchResults:
      return {
        ...state,
        beers: action && action.payload && action.payload.beers && state.beers && action.payload.beers,
        isSearching: action && action.payload && action.payload.isSearching && action.payload.isSearching,
      };
    case BeerContextActions.GetDetails:
      return {
        ...state,
        beerDetails: action.payload.beerDetails,
        error: action.payload.error,
      }
    case BeerContextActions.ClearDetails:
      return {
        ...state,
        beerDetails: action.payload.beerDetails,
      }
    case BeerContextActions.SetError:
      return {
        ...state,
        error: action.payload.error,
      }
    case BeerContextActions.ClearError:
      return {
        ...state,
        error: action.payload.error,
      }
    case BeerContextActions.CalculateDifference:
      return {
        ...state,
        calculation: action.payload.fg && action.payload.og && Math.floor(action.payload.og - action.payload.fg)
      }
    case BeerContextActions.ClearCalculation:
      return {
        ...state,
        calculation: action.payload.calculation
      }
    default:
      return state;
  }
}
