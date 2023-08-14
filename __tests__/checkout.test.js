import React from 'react';
import Checkout from '../pages/Checkout';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Checkout', () => {
  it('renders checkout page without exploding', () => {
    render(<Checkout />);
  });
});

// test to check present of 'MUI' button
