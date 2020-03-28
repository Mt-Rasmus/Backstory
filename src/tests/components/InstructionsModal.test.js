
import React from 'react';
import InstructionsModal from '../../components/InstructionsModal';
import { shallow } from 'enzyme';

test('Should render Header correctly', () => {
   const wrapper = shallow(<InstructionsModal />);
   expect(wrapper).toMatchSnapshot();
});
