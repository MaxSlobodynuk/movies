import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/HomePage';
import MoviesPage from 'page/MoviesPage';
import MovieDetails from 'page/MovieDetails';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/films" element={<MoviesPage />} />
          <Route path="/films/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
