
import React from 'react';
import LoadingPage from './LoadingPage';
import StoryPage from './StoryPage';
import { getStories } from '../selectors/stories';

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
         let stories = [];
         this.state.stories.map((story) => {
            if(!localStorage.getItem(`story${story.id}_solved`))
               return stories.push(story);
         });
         this.setState({stories, filterSolved: true});
      } else {
         getStories().then(
            stories => {
               this.setState({stories, filterSolved: false});
            }
         )
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
                     onClick={this.filterStories}
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