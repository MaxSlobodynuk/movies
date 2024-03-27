import HomeList from 'components/HomeList';
import { getTrendingMovies } from 'moviesAPI';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <HomeList movies={movies} />
    </main>
  );
};

export default HomePage;
