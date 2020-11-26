import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
} from '@material-ui/core';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const CartDialog = ({ cart, handleClose, open }) => {
  const cartMovies = [...cart.values()];
  return (
    <Dialog
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby='dialog-title'
      open={open}
    >
      <DialogTitle id='dialog-title'>You're good to go, enjoy!</DialogTitle>
      <List>
        {cartMovies.map((movie) => (
          <ListItem key={movie.imdbID}>
            <ListItemAvatar>
              <Avatar src={movie.Poster}></Avatar>
            </ListItemAvatar>
            <ListItemText> {movie.Title} </ListItemText>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
