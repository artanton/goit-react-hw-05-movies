import { fetchTrends } from 'api';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { ProgressBar } from 'react-loader-spinner';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [trendItems, setTrendItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendItems() {
      try {
        setIsLoading(true);

        const Trends = await fetchTrends();
        setTrendItems(Trends);
      } catch (error) {
        Notiflix.Notify.failure(
          'Something went wrong! Try reload the page... '
        );
      } finally {
        setIsLoading(false);
      }
    }

    getTrendItems();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {isLoading && (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      )}

      {trendItems.results && trendItems.results.length > 0 && (
        <MoviesList FoundedMovies={trendItems} />
      )}
    </div>
  );
}
