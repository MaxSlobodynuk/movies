import { getCast } from 'moviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getFilmCast = async () => {
      try {
        const { cast } = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getFilmCast();
  }, [movieId]);

  console.log(cast);

  return (
    <section>
      {cast.length > 0 ? (
        <div style={{ marginLeft: '20px' }}>
          {cast.map(item => (
            <div
              key={item.cast_id}
              className="card mb-2"
              style={{ maxWidth: '150px' }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.character}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="card-text">Not found</p>
      )}
    </section>
  );
};

export default Cast;
