
import React from 'react';
import StoryPage from '../../components/StoryPage';
import { shallow } from 'enzyme';
import stories from '../../fixtures/teststories'; // importing test data

test('Should render StoryPage correctly', () => {
   const wrapper = shallow(<StoryPage story={stories[0]}/>);
   expect(wrapper).toMatchSnapshot();
});
