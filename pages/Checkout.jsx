import { Grid, Button } from '@mui/material';
// import { Button } from '@web/safaricom-component-library';
import styled from '@emotion/styled';
import React from 'react';

export default function Checkout() {
  // style container
  const Container = styled.div``;
  // style the button
  const StyledButton = styled.button``;

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button variant="outlined">MUI </Button>
            {/* <Button label='Default contained' /> */}
          </Grid>
          <Grid item xs={3}>
            {/* <Button label='Default outlined' variant='outlined' /> */}
          </Grid>
          <Grid item xs={3}>
            {/* <Button label='Default text' variant='text' /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
