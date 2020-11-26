import { Fab } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { CartDialog } from './CartDialog';

const CheckoutButton = styled(Fab)`
  margin: auto;
  width: 70%;
  display: flex;
  margin-top: 50px;
`;
export const Checkout = ({ cart, clearCart }) => {
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    clearCart();
    setOpen(false);
  };

  return (
    <Fragment>
      <CheckoutButton
        disabled={cart.size === 0}
        size='large'
        variant='extended'
        color='primary'
        onClick={() => setOpen(true)}
      >
        <span>{`Checkout (${cart.size ? cart.size : 0})`}</span>
      </CheckoutButton>
      <CartDialog open={open} cart={cart} handleClose={handleDialogClose}></CartDialog>
    </Fragment>
  );
};
