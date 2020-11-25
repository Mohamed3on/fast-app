import styled from 'styled-components';

import React from 'react';
import { Checkbox } from '@material-ui/core';

const StyledMovie = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: #13cdd652;
  }
`;

export const Movie = ({ movie, addMovie, removeMovie, checked }) => {
  const handleCheck = () => {
    if (!checked) {
      addMovie(movie);
    } else {
      removeMovie(movie);
    }
  };

  return (
    <StyledMovie role='button' onClick={handleCheck}>
      <Checkbox checked={checked} name={movie.imdbID} onChange={handleCheck}></Checkbox>
      <img src={movie.Poster} width='10%' alt=''></img>
      <span style={{ flexBasis: '50%' }}>
        {movie.Title} ({movie.Year})
      </span>
    </StyledMovie>
  );
};
