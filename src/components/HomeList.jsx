import { getTrendingMovies } from 'moviesAPI';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className="list-group list-group-flush">
      {movies &&
        movies.results.map(film => (
          <li className="list-group-item" key={film.id}>
            <Link
              to={`films/${film.id}`}
              className="list-group-item list-group-item-action"
            >
              {film.name || film.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default HomeList;
