
import React from 'react';
import LoadingPage from './LoadingPage';
import StoryPage from './StoryPage';
import { getStories } from '../selectors/stories';

class StoriesPage extends React.Component {
   constructor(props) {
      super(props);
      this._isMounted = false;
      this.state = {
         stories: null
      };
   }
   componentDidMount() {
      this._isMounted = true;
      this._asyncRequest = getStories().then(
         stories => {
            this._asyncRequest = null;
            if(this._isMounted) {
               this.setState({stories});
            }
         }
      )
   }
   
   componentWillUnmount() {
      this._isMounted = false;
   }

   render () {
      if(this._isMounted) {
         if (this.state.stories.length === 0) {
            return (
               <LoadingPage />
            )
         }
         else {
            return (
               <div>
               {
                  this.state.stories.map((story) => {
                     return <StoryPage key={story.id} story={story} />
                  })
               }
               </div>
            )
         }
      }
      else {
         return (
            <div/>
         )      
      }
   }
}

export default StoriesPage;