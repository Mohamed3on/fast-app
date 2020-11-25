import styled from 'styled-components';

import React, { useEffect, useRef, useState } from 'react';
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

export const Movie = ({ movie, addMovie, removeMovie }) => {
  const [checked, setChecked] = useState(false);
  const didMountRef = useRef(null);

  useEffect(() => {
    if (didMountRef.current) {
      if (checked) {
        addMovie(movie);
      } else {
        removeMovie(movie);
      }
    } else didMountRef.current = true;
  }, [checked, addMovie, movie, removeMovie]);

  return (
    <StyledMovie role='button' onClick={() => setChecked(!checked)}>
      <Checkbox checked={checked} name={movie.imdbID}></Checkbox>
      <img src={movie.Poster} width='10%' alt=''></img>
      <span style={{ flexBasis: '50%' }}>
        {movie.Title} ({movie.Year})
      </span>
    </StyledMovie>
  );
};
