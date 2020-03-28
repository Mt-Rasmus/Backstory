
import React from 'react';
import StoryModal from '../../components/StoryModal';
import { shallow } from 'enzyme';
import stories from '../../fixtures/teststories'; // importing test data

test('Should render StoryModal correctly', () => {
   const wrapper = shallow(<StoryModal story={stories[0]} />);
   expect(wrapper).toMatchSnapshot();
});
