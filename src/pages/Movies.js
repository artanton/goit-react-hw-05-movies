import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import { Searcher } from 'components/SearshForm/SearshForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchSearchedItems } from 'api';

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [foundedItems, setFoundedItems] = useState({});
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const location = useLocation();

  const handleSubmit = newQuery => {
    if (newQuery === '') {
      return;
    }

    params.set('query', newQuery);
    setParams(params);

    setFoundedItems([]);
  };

  useEffect(() => {
    if (!params) return;

    async function getSearchedItems() {
      try {
        setIsLoading(true);

        const SearchedItems = await fetchSearchedItems(query);
        setFoundedItems(SearchedItems);
      } catch (error) {
        Notiflix.Notify.failure(
          'Something went wrong! Try reload the page... '
        );
      } finally {
        setIsLoading(false);
      }
    }

    getSearchedItems();
  }, [query, params]);

  return (
    <div>
      <div>
        <Searcher onSubmit={handleSubmit}></Searcher>
      </div>

      {isLoading && (
        <ProgressBar
          height="80"
          width="400"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="Teal"
        />
      )}

      {foundedItems.results && foundedItems.results.length > 0 && (
        <MoviesList FoundedMovies={foundedItems} location={location} />
      )}
    </div>
  );
}
