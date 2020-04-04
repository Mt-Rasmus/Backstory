
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

   componentDidMount = () => {
      const isSolved = localStorage.getItem(`story${this.props.story.id}_solved`);
      if(isSolved !== null) {
         if(isSolved === "true") {
            this.setState({ solved: true });
         } else if (isSolved === "false") {
            this.setState({ solved: false });
         }
      }
   }

   handleShowStoryModal = () => {
      this.setState({ showStoryModal: true });
   }  

   handleCloseStoryModal = () => {
      this.setState({ showStoryModal: false });
   }

   toggleSolved = () => {
      if(this.state.solved === true) {
         this.setState({ solved: false });
         console.log('remove');
         localStorage.removeItem(`story${this.props.story.id}_solved`);
      }
      else if (this.state.solved === false) {
         this.setState({ solved: true });
         localStorage.setItem(`story${this.props.story.id}_solved`, JSON.stringify(true));
      }
   }

   render() {
      return (
         <div className="list-body" >
            <div className="list-item" onClick={this.handleShowStoryModal}>
               <div className="list-item__title-container">
                  <img src={'/images/scratch_red1.png'} className="scratch-icon" alt=""/>
                  <p className="list-item__title">{this.props.story.title}</p>
               </div>
                  <div className="icon-container">
                     <div className="icon-container-sub">
                        <img src={`/images/premises/premise${this.props.story.id}.png`} alt="" className="icon"/>
                     </div>
               </div>
               {this.state.solved ? <p className="list-item__solved-text ">solved</p> : <p className="list-item__unsolved-text">solved</p>}
            </div>
               <div>
                  <StoryModal 
                     showModal={this.state.showStoryModal} 
                     handleCloseStoryModal={this.handleCloseStoryModal}
                     solved={this.state.solved}
                     toggleSolved={this.toggleSolved}
                     story={this.props.story} 
                  />           
               </div>         
         </div>
      )
   }
}

