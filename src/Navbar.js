import styled from 'styled-components';
import React from 'react';
import { Button, OutlinedInput } from '@material-ui/core';

const Bar = styled.div`
  display: flex;
  padding: 10px;
  background-color: black;
  justify-content: space-evenly;
`;
const SearchBar = styled(OutlinedInput)`
  background-color: white;
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;

const Form = styled.form`
  flex-basis: 50%;
`;

export const Navbar = ({ handleSubmit, handleInputChange, inputValue }) => {
  return (
    <Bar>
      <img
        src='https://assets-global.website-files.com/5e349c95d8d0c2af030d4e98/5e349c95d8d0c2121b0d4ecd_Fast-LogoWhite.svg'
        alt=''
      ></img>
      <Form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <SearchBar
          value={inputValue}
          type='text'
          name='search'
          onChange={handleInputChange}
        ></SearchBar>
      </Form>
      <Button size='large' onClick={handleSubmit} variant='contained' color='primary'>
        Search
      </Button>
    </Bar>
  );
};
