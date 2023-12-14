import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { ProgressBar } from 'react-loader-spinner';
import { fetchReviews } from 'api';
import { Author, Post } from './ReviewStyled';

export const Reviews = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    if (!params) return;

    setIsLoading(true);
    async function getReviews() {
      try {
        const fetchedReviews = await fetchReviews(params.Id);
        setReviews(fetchedReviews);
      } catch (error) {
        Notiflix.Notify.failure(
          'Something went wrong! Try reload the page... '
        );
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [params]);
  const { results } = reviews;

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
        {results &&
          results.length > 0 &&
          results.map(item => (
            <Post key={item.id}>
              <Author>
                <b>{item.author}</b>
              </Author>
              <p>{item.content}</p>
            </Post>
          ))}
      </ul>
    </div>
  );
};
