import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { ProgressBar } from 'react-loader-spinner';
import { fetchMovieById } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { AddInfoNav, GoBack, GoBackWrapper, NavBtn } from './MovieDetailStyled';

export default function MovieDetais() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const backLinkRef = useRef(location);

  useEffect(() => {
    if (!params) return;

    setIsLoading(true);

    async function getMovie() {
      try {
        const fetchMovie = await fetchMovieById(params.Id);
        setMovie(fetchMovie);
      } catch (error) {
        Notiflix.Notify.failure(
          'Something went wrong! Try reload the page... '
        );
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [params]);

  return (
    <div>
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

      <GoBackWrapper>
        <GoBack to={backLinkRef.current.state?.from ?? '/'}>Go Back</GoBack>
      </GoBackWrapper>

      {movie && <MovieInfo movie={movie} />}
      {movie !== false && (
        <div>
          <AddInfoNav>
            <li>
              <NavBtn to="cast">Cast</NavBtn>
            </li>
            <li>
              <NavBtn to="reviews">Rewievs</NavBtn>
            </li>
          </AddInfoNav>
        </div>
      )}
      <Outlet />
    </div>
  );
}
