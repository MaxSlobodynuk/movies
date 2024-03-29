import { getReviews } from 'moviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams();

    useEffect(() => {
      const getFilmReviews = async () => {
        try {
          const { results } = await getReviews(movieId);
          setReviews(results);
        } catch (error) {
          console.log(error);
        }
      };
      getFilmReviews();
    }, [movieId]);

  console.log(reviews)

  return (
    <section>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.author}</h5>
              </div>
              <p className="mb-1">{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className='card-text'>No reviews</p>
      )}
    </section>
  );
};

export default Reviews;
