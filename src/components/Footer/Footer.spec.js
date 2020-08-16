import { shallow } from 'enzyme';
import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Footer from './Footer';

it('renders as expected', () => {
// eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<Footer />);
  expect(wrapper.find(Container).length).toEqual(1);
  expect(wrapper.find(Typography).length).toEqual(2);
  expect(wrapper.find(Divider).length).toEqual(1);
});
