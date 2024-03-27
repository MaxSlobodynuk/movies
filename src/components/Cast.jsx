import { getCast } from 'moviesAPI';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
      const getFilmCast = async () => {
        try {
          const {cast} = await getCast(movieId);
          setCast(cast);
        } catch (error) {
          console.log(error);
        }
      };
      getFilmCast();
    }, [movieId]);

  console.log(cast);
  
  return (
    <div>Cast</div>
  )
}

export default Cast