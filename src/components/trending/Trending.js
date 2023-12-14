import { Link } from 'react-router-dom';

export const Tranding = ({ TrendFilms }) => {
  return (
    <ul>
      {TrendFilms.results.map(TrandFilm => (
        <li key={TrandFilm.id}>
          <Link to={`/movies/${TrandFilm.id}`}>{TrandFilm.title}</Link>
        </li>
      ))}
    </ul>
  );
};
