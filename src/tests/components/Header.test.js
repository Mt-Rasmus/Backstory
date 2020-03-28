
import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';

test('Should render Header correctly', () => {
   const wrapper = shallow(<Header />);
   expect(wrapper).toMatchSnapshot();
});
