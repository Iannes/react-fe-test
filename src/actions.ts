import React from 'react';
import { BeerContextActions } from 'Types';
import { Payload } from 'Types';


export type GlobalBeerAction =
  | {
      type: BeerContextActions.SetDefaults;
      payload: Payload;
    }
  | {
      type: BeerContextActions.SetSearchResults;
      payload: Payload;
    }
  | {
      type: BeerContextActions.ClearSearchResults;
      payload: Payload;
    }
    | {
      type: BeerContextActions.SetError;
      payload: Payload;
    }   
    | {
      type: BeerContextActions.GetDetails;
      payload: Payload;
    }        
    | {
      type: BeerContextActions.ClearDetails;
      payload: Payload;
    }        
    | {
      type: BeerContextActions.ClearError;
      payload: Payload;
    }        
    | {
      type: BeerContextActions.CalculateDifference;
      payload: Payload;
    }        
    | {
      type: BeerContextActions.ClearCalculation;
      payload: Payload;
    }        

export type BeerAction = React.Dispatch<GlobalBeerAction>;
