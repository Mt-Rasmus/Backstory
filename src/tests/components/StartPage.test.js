
import React from 'react';
import StartPage from '../../components/StartPage';
import { shallow } from 'enzyme';

test('Should render StartPage correctly', () => {
   const wrapper = shallow(<StartPage />);
   expect(wrapper).toMatchSnapshot();
});
