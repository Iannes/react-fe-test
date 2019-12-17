import React from 'react'
import { useBeerDispatch } from 'Lib/contexts/GlobalBeerContext';
import { scrollToTop } from 'Modules/helpers/scrollToTop';
import { clearSearchResults, setSearchResults } from 'Lib/actions';
import { fetchBeers as fetchBeerByName } from 'Api';
import { Beer } from 'Types/PunkApi';
import { Searchbar } from "./SearchBar";
import { fetchBeerPage } from 'Modules/hooks/useFetchBeers';

const SearchbarContainer: React.FC = () => {
  const dispatch = useBeerDispatch();
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    scrollToTop();
    if (value) {
      return fetchBeerByName(value).then((res: Beer[]) => {
        dispatch(setSearchResults(res));
      })
    }
  }

  React.useEffect(() => {
    const getDefaults = async () => {
      scrollToTop();
      const data = await fetchBeerPage(1);
      dispatch(clearSearchResults(data));
      return data;
    }
    if (!value) getDefaults();

  }, [value, dispatch])

  return (
    <form onSubmit={handleSubmit} className="wrap">
      <Searchbar
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={value}
      />
    </form>
  )
}

export default SearchbarContainer;
