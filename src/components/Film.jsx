import { getFilm } from 'moviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Film = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getFilmInformation = async () => {
      try {
        const { data } = await getFilm(movieId);
        console.log(data);
        setFilm(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFilmInformation();
  }, [movieId]);

  return (
    <div>
      {film.id && (
        <div className="card mb-3" style={{ maxWidth: '700px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  film
                    ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}`
                    : 'no image'
                }
                className="img-fluid rounded-start"
                alt={film.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <h5 className="card-title">Overview</h5>
                <p className="card-text">{film.overview}</p>
                <h5 className="card-title">Genres</h5>
                <ul>
                  {film.genres &&
                    film.genres.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Film;
