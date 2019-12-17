import axios from 'axios';
import { useBeerDispatch } from 'Lib/contexts/GlobalBeerContext';
import { setDefaults } from 'Lib/actions';
import { Beer } from 'Types/PunkApi';

export const fetchBeerPage = async (pageNumber: number) => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/beers/?page=${pageNumber}`)
  const { data } = res;
  return data;
}

export const useFetchBeers = async (pageNumber = 1): Promise<Beer> => {
  const dispatch = useBeerDispatch();
  const data = await fetchBeerPage(pageNumber);
  dispatch(setDefaults(data))
  return data
};
