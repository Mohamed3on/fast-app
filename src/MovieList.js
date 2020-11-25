import React from 'react';
import styled from 'styled-components';
import { Movie } from './Movie';

const MoviesContainer = styled.ul`
  padding: 0.3em;
  border-radius: 8px;
  display: grid;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin: 0 0.3em;
  list-style-type: none;
`;
export const MovieList = ({ movies, addMovie, removeMovie, isMovieChecked }) => {
  return (
    <MoviesContainer>
      {movies.map(
        (item) =>
          item.Poster !== 'N/A' && (
            <Movie
              checked={isMovieChecked(item)}
              movie={item}
              addMovie={addMovie}
              removeMovie={removeMovie}
              key={item.imdbID}
            ></Movie>
          )
      )}
    </MoviesContainer>
  );
};
