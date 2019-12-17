import React, { Suspense } from 'react';
import { useCache } from 'Modules/hooks/useCache';
import Spinner from 'Modules/components/common/Spinner';
import './details.scss';

const DetailsCard = React.lazy(() => import('Modules/components/DetailsCard'));

type DetailsPageProps = {
  beerName: string;
}

const initialState = {
  name: "beer",
  description: "",
  first_brewed: "",
  image_url: "",
  food_pairing: [],
  abv: 0,
  ibu: 0,
  contributed_by: "",
}

const DetailsPage: React.FC<DetailsPageProps> = ({ beerName }) => {
  const { parsed, stateBeerDetailObject } = useCache(beerName);
  const [details, setDetails] = React.useState(initialState);

  React.useEffect(() => {
    setDetails({
      name: (stateBeerDetailObject && stateBeerDetailObject.name) || "",
      description: (stateBeerDetailObject && stateBeerDetailObject.description) || "",
      first_brewed: (stateBeerDetailObject && stateBeerDetailObject.first_brewed) || "",
      image_url: (stateBeerDetailObject && stateBeerDetailObject.image_url) || "",
      food_pairing: (stateBeerDetailObject && stateBeerDetailObject.food_pairing) || (parsed && parsed[0] && parsed[0].food_pairing),
      abv: (stateBeerDetailObject && stateBeerDetailObject.abv) || 0,
      ibu: (stateBeerDetailObject && stateBeerDetailObject.ibu) || 0,
      contributed_by: (stateBeerDetailObject && stateBeerDetailObject.contributed_by) || "",
    })
    // clear storage when component unmounts
    return () => {
      window.localStorage.clear();
    }
  }, [stateBeerDetailObject])

  return (
    <Suspense fallback={<Spinner />}>
      <DetailsCard details={details} />
    </Suspense>
  )
}

export default DetailsPage;
