
import React from 'react';
import StoriesPage from '../../components/StoriesPage';
import { shallow } from 'enzyme';

test('Should render StoriesPage correctly', () => {
   const wrapper = shallow(<StoriesPage />);
   expect(wrapper).toMatchSnapshot();
});
