import { shallow } from 'enzyme';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'redux-form';
import BookAdvancedSearch from './BookAdvancedSearch';

it('renders as expected', () => {
// eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<BookAdvancedSearch />);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find(Grid).length).toEqual(5);
  expect(wrapper.find(Field).length).toEqual(4);
});
