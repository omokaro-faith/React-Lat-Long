import React from 'react';
import { shallow } from 'enzyme';
import { MapWrapper } from '../../components/MapWrapper';


test('should render Header correctly', () => {
  const wrapper = shallow(<MapWrapper />);
  expect(wrapper.find('div').length).toBe(1);
  console.log(wrapper)
  expect(wrapper).toMatchSnapshot();
});

