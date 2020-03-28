
import { getStories } from '../../selectors/stories';
import stories from '../../fixtures/stories'; // importing test data

test('Should return stories', () => {
   const result = getStories().then(() => {
      expect(result).toEqual(stories)
   });
});

getStories