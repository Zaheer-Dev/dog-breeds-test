import React from 'react';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import { store } from '../reduxToolkit/store';
import { getByTestId, render, screen, waitFor } from '@testing-library/react'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store} >
      <Home />
     </Provider>
  );

  expect(getByText(/dog/i)).toBeInTheDocument();
});

    // test('show selected item...', async () => {
    //     const { getByText, getByLabelText } = render(   <Provider store={store} ><Home /></Provider>);
    
    //     const btn=expect(getByTestId('btn',)).toBeInTheDocument();
    //     console.log('btn :>> ', btn);
    
    //   });

