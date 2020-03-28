
import React from 'react';
import PremiseView from '../../components/PremiseView';
import { shallow } from 'enzyme';

test('Should render PremiseView correctly', () => {
   const wrapper = shallow(<PremiseView />);
   expect(wrapper).toMatchSnapshot();
});
