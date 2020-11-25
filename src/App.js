import './App.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { Navbar } from './Navbar';
import { MovieList } from './MovieList';

const breakpoints = {
  xs: `(min-width: 320px)`,
  sm: `(min-width: 768px)`,
  lg: `(min-width: 1200px)`,
};

const Container = styled.div`
  margin: auto;
  margin-top: 1em;
  @media ${breakpoints.xs} {
    width: 100%;
  }
  @media ${breakpoints.sm} {
    width: 50%;
  }
`;

const Checkout = styled(Fab)`
  margin: auto;
  width: 70%;
  display: flex;
  margin-top: 50px;
`;

function App() {
  const [error, setError] = useState(null);

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(new Map());
  const [inputValue, setInputValue] = useState('Citizen Kane');
  const [searchValue, setSearchValue] = useState(inputValue);

  const addMovie = useCallback((movie) => {
    setCart((c) => {
      const n = new Map(c);
      n.set(movie.imdbID, movie);
      return n;
    });
  }, []);

  const removeMovie = useCallback((movie) => {
    setCart((c) => {
      const n = new Map(c);
      n.delete(movie.imdbID);
      return n;
    });
  }, []);

  const checkout = () => {
    setCart(new Map());
    setItems([]);
    setInputValue('');
  };

  const handleSubmit = (event) => {
    setSearchValue(inputValue);
    event.preventDefault();
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=bfb610a2&s=${searchValue}`)
      .then((res) => res.json())
      .then(
        (result) => setItems(result.Search),
        (error) => setError(error)
      );
  }, [searchValue]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <StylesProvider injectFirst>
        <Fragment>
          <Navbar
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            inputValue={inputValue}
          ></Navbar>
          {items.length ? (
            <Container>
              <MovieList addMovie={addMovie} removeMovie={removeMovie} movies={items}></MovieList>
              <Checkout
                disabled={cart.size === 0}
                size='large'
                variant='extended'
                color='primary'
                onClick={checkout}
              >
                <span>{`Checkout (${cart.size ? cart.size : 0})`}</span>
              </Checkout>
            </Container>
          ) : (
            'Please enter a search term!'
          )}
        </Fragment>
      </StylesProvider>
    );
  }
}

export default App;
