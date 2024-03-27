import { getReviews } from 'moviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null)
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

  return <div>Reviews</div>;
};

export default Reviews;
