
import React from 'react';
import LoadingPage from './LoadingPage';
import StoryPage from './StoryPage';
import { getStories } from '../selectors/stories';
import localForage from "localforage";

class StoriesPage extends React.Component {
   constructor(props) {
      super(props);
      this._isMounted = false;
      this.state = {
         stories: null,
         filterSolved: false
      };
   }
   componentDidMount() {
      this._isMounted = true;
      getStories().then(
         stories => {
            if(this._isMounted) {
               this.setState({stories});
            }
         }
      )
   }
   
   componentWillUnmount() {
      this._isMounted = false;
   }

   filterStories = () => {
      if (!this.state.filterSolved) {
         let unsolvedStories = [];
         this.state.stories.map((story) => {
            localForage.getItem(`story${story.id}_solved`).then((data) => {
               !data && unsolvedStories.push(story)
               story.id == this.state.stories.length &&
                  this.setState({unsolvedStories, filterSolved: true})
            });
         });
      } else {
         return this.state.stories;
      }
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
               <div className="content-container">
                  <label 
                     className="list-item__small-text"
                     >Show only unsolved stories:
                  </label>
                  <input 
                     className="list-item__checkbox" 
                     type="checkbox" 
                     onMouseDown={this.filterStories}
                  />
                  <div className="grid-container">
                  {
                     this.state.stories.map((story) => {
                        return <StoryPage 
                                 key={story.id} 
                                 story={story} 
                                />
                     })
                  }
                  </div>
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