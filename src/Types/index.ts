import React from 'react';
import { Beer } from "./PunkApi";
import { GlobalBeerAction } from "actions";

export type ContextChildren = React.FC<React.ReactNode>;

export enum Routes {
  ROUTE = '/',
  BEERS = '/dashboard'
}

export enum APP_ROUTE {
  HOME = '/',
  BEERS = '/dashboard',
}


export enum BeerContextActions {
  SetDefaults,
  SetSearchResults,
  ClearSearchResults,
  GetDetails,
  ClearDetails,
  SetError,
  ClearError,  
  CalculateDifference,
  ClearCalculation
}

export type GlobalBeerState = {
  beers?: Beer[],
  beerDetails?: Beer[],
  loading?: boolean;
  page?: number;
  error?: Error;
  calculation?: number;  
  isSearching?: boolean;
};

export type Payload = {
  beers?: Beer[],
  loading?: boolean;
  error?: Error;
  beerDetails?: Beer[];
  og?: number;
  fg?: number;
  calculation?: number;  
  isSearching?: boolean;
}

export interface Details {
  details: Beer;  
}
export type Section = {  
  sectionTitle: string;
  hasDivider?: boolean;
}


export type GlobalBeerDispatch = (action: GlobalBeerAction) => void;
