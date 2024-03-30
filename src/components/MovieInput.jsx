import { getFilmByQuery } from 'moviesAPI';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HomeList from './HomeList';

const MovieInput = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const firstRender = useRef(true);
  
  const query = searchParams.get('query') ?? '';

  const getFilm = async query => {
    try {
      const { data } = await getFilmByQuery(query);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    query && firstRender.current && getFilm(query);
  }, [query]);

  const handleChange = ({ target }) => {
    target.value
      ? setSearchParams({ query: target.value })
      : setSearchParams({});
    firstRender.current = false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    getFilm(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ marginLeft: '30px' }} className="input-group mb-3">
          <input
            style={{ maxWidth: '300px' }}
            type="text"
            value={query}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter the name of the movie"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </form>
      <HomeList movies={movies} />
    </>
  );
};

export default MovieInput;
