import React from 'react';
import { useBeerDispatch, useBeerState } from 'Lib/contexts/GlobalBeerContext';
import { useParams, Redirect } from 'react-router';
import { APP_ROUTE } from 'Types';
import { fetchBeers } from 'Api';
import DetailsPage from './Details'
import { Beer } from 'Types/PunkApi';
import { fetchBeerDetails, setError } from 'Lib/actions';
import { useLocalStorage } from 'Modules/hooks/useLocalStorage';

const DetailsPageContainer = () => {
  const dispatch = useBeerDispatch();
  const state = useBeerState();
  const { id } = useParams();
  useLocalStorage(id, state)

  React.useEffect(() => {
    fetchBeers(id)
      .then((res: Beer[]) => dispatch(fetchBeerDetails(res)))
      .catch((err: Error) => dispatch(setError(err)))
  }, [id, dispatch])


  if (!id) {
    return <Redirect to={APP_ROUTE.HOME} />
  }

  return <DetailsPage beerName={id} />
}

export default DetailsPageContainer;
