
import React from 'react';
import StoryModal from './StoryModal';

export default class StoryPage extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         solved: false,
         showStoryModal: false
      };
   }

   handleShowStoryModal = () => {
      this.setState({ showStoryModal: true });
   }  

   handleCloseStoryModal = () => {
      this.setState({ showStoryModal: false });
   }

   toggleSolved = () => {
      this.setState({ solved: !this.state.solved });
   }

   render() {
      return (
         <div>
            <div onClick={this.handleShowStoryModal} className="content-container">
               <p>{this.props.story.title}</p>
            </div>
            <div>
               <input type="checkbox" id="vehicle1" onClick={this.toggleSolved}></input>
               <label htmlFor="vehicle1">solved</label><br></br>
            </div>
            <div>
               <StoryModal 
                  showModal={this.state.showStoryModal} 
                  handleCloseStoryModal={this.handleCloseStoryModal} 
                  toggleSolved={this.toggleSolved}
                  story={this.props.story}
               />           
            </div>
         </div>
      )
   }
}

