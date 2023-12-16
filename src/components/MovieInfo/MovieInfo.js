import { InfoString, MovieContainer } from './MovieInfoStyled';

export const MovieInfo = ({ movie }) => {
  const { original_title, title, poster_path, vote_average, overview, genres } =
    movie;

  return (
    <div>
      <h1>{original_title}</h1>
      <MovieContainer>
        <img
          src={poster_path?
            `https://image.tmdb.org/t/p/w300${poster_path}`
            :`https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`}
            width= "300"
          alt={title}
        />
        <div>
          <InfoString>
            {' '}
            <b>User Score:</b> {vote_average}
          </InfoString>
          <InfoString>
            {' '}
            <b>Overview:</b> {overview}
          </InfoString>

          {genres && genres.length > 0 && (
            <InfoString>
              <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
            </InfoString>
          )}
        </div>
      </MovieContainer>
    </div>
  );
};
