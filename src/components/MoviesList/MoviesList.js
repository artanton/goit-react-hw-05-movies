import { Link } from 'react-router-dom';

export const MoviesList = ({ FoundedMovies, location }) => {
  return (
    <ul>
      {FoundedMovies.results.map(FoundedMovie => (
        <li key={FoundedMovie.id}>
          <Link to={`/movies/${FoundedMovie.id}`} state={{ from: location }}>
            {FoundedMovie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
