import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('div').length).toBe(1);
  console.log(wrapper)
  expect(wrapper).toMatchSnapshot();
});

