import React from 'react';
import { shallow } from 'enzyme';
import LoadingContainer from '../../components/LoadingContainer';

test('should render LoadingContainer', () => {
  const wrapper = shallow(<LoadingContainer />);
  expect(wrapper).toMatchSnapshot();
});
