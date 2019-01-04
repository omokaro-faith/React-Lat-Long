import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('div').length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});

test('should render Header with users photo if user is logged in', () => {
  const wrapper = shallow(<Header photoURL={'this is my photo'} displayName={'this is a display name'}/>);
  expect(wrapper.find('img').length).toBe(1);
});

test('should not render Header with users photo if user is not logged in', () => {
  const wrapper = shallow(<Header photoURL={'this is my photo'} />);
  expect(wrapper.find('img').length).toBe(0);
});

test('should handle user logout', () => {
  const initialState = {
    lastRolledNumber: 1
};

  const startLogout = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<Header 
    photoURL={'this is my photo'}
    displayName={'this is a display name'}
    startLogout={startLogout}
    history={history}
    />);

    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
