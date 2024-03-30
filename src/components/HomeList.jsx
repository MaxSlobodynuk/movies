import { Link, useLocation } from 'react-router-dom';

const HomeList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="list-group list-group-flush">
      {movies &&
        movies.map(film => (
          <li className="list-group-item" key={film.id}>
            <Link
              to={`/movies/${film.id}`}
              state={{ from: location }}
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
