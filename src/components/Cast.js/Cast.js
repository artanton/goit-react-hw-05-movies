import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { ProgressBar } from 'react-loader-spinner';
import { fetchCast } from 'api';
import { Actor } from './CactStyled';

export const Cast = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState({});

  useEffect(() => {
    if (!params) return;
    setIsLoading(true);
    async function getCast() {
      try {
        const fetchedCast = await fetchCast(params.Id);
        setActors(fetchedCast);
      } catch (error) {
        Notiflix.Notify.failure(
          'Something went wrong! Try reload the page... '
        );
      } finally {
        setIsLoading(false);
      }
    }

    getCast();
  }, [params]);

  const { cast } = actors;

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
      <ul>
        {cast &&
          cast.length > 0 &&
          cast.map(item => (
            <Actor key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                    : `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`
                }
                width="200"
                alt={item.name}
              />

              <div>

              <p>{item.name}</p>
              <p>Character: {item.character}</p> 
              </div>
              
            </Actor>
          ))}
      </ul>
    </div>
  );
};
