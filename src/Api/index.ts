import axios from 'axios';
import { Beer } from 'Types/PunkApi';
import { setError } from 'Lib/actions';

export const fetchBeers = (id: string | undefined): Promise<Beer[]> => {
  if (id) {
    return axios.get(`${process.env.REACT_APP_API_URL}/beers?beer_name=${id}`)
      .then(res => res.data)
      .catch((err: Error) => setError(err));
  }

  return axios.get(`${process.env.REACT_APP_API_URL}/beers`)
    .then(res => res.data)
    .catch((err: Error) => setError(err));
}
