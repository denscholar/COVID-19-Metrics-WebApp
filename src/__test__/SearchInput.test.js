import React from 'react';
import { create } from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import SearchInput from '../components/SearchInput/SearchInput';

afterEach(() => cleanup());

it('App Renders Correctly', () => {
  const tree = create(
    <Provider store={store}>
      <SearchInput />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
