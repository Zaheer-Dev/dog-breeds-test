import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import Home from './pages/Home';

test('renders learn react link', () => {
  const { getByText } = render(
    // <Provider >
      <App />
    // </Provider>
  );

  // expect(getByText(/About/i)).toBeInTheDocument();
});
