import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';
import { start } from 'repl';

test('should render the Login page', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test('should call Login button on login click', (done) => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Login startLogin={startLogin}/>);

  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
  done();
});
