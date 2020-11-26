import './App.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { Navbar } from './Navbar';
import { MovieList } from './MovieList';
import { Checkout } from './Checkout';

const Container = styled.div`
  margin: auto;
  margin-top: 1em;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
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

  const clearCart = () => {
    setCart(new Map());
    setItems([]);
    setInputValue('');
  };

  const handleSubmit = (event) => {
    setSearchValue(inputValue);
    event.preventDefault();
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const isMovieChecked = (movie) => cart.has(movie.imdbID);

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
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          ></Navbar>
          {items.length ? (
            <Container>
              <MovieList
                movies={items}
                isMovieChecked={isMovieChecked}
                addMovie={addMovie}
                removeMovie={removeMovie}
              ></MovieList>
              <Checkout cart={cart} clearCart={clearCart}></Checkout>
            </Container>
          ) : (
            'Please enter a new search term!'
          )}
        </Fragment>
      </StylesProvider>
    );
  }
}

export default App;
