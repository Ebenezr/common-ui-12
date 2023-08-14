import { Grid, Button } from '@mui/material';
// import { Button } from '@web/safaricom-component-library';
import styled from '@emotion/styled';
import React from 'react';

export default function Checkout() {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button variant="outlined">MUI </Button>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
