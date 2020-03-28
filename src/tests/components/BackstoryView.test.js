
import React from 'react';
import BackstoryView from '../../components/BackstoryView';
import { shallow } from 'enzyme';

test('Should render BackstoryView correctly', () => {
   const wrapper = shallow(<BackstoryView />);
   expect(wrapper).toMatchSnapshot();
});
