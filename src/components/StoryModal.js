
import React from 'react';
import PremiseView from './PremiseView';
import BackstoryView from './BackstoryView';
import Modal from 'react-modal';
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

export default class StoryModal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         solved: false,
         showBackstory: false
      };
   }

   toggleShowBackstory = () => {
      this.setState({showBackstory: !this.state.showBackstory})
   }

   resetModal = () => {
      this.props.handleCloseStoryModal();
      setTimeout(() => {this.setState({showBackstory: false})}, 500);
   }

   toggleInTransitionClass = () => {
      this.classList.toggle('rotate-div-in');
  }

   render () {
      return (
         <Modal
            isOpen={this.props.showModal}
            onRequestClose={this.resetModal} // clicking esc or outside modal
            closeTimeoutMS={200}      
            className="modal"
            style={{overlay:{backgroundColor:"rgba(0,0,0,0.3)"}}}
         >
            <span className="button--close" onClick={this.resetModal}></span>
            <div className="inner-modal">
               <div className="modal__title">
                  <img src={'/images/scratch_red1.png'} className="scratch-icon" alt=""/>
                  <p className="list-item__title">{this.props.story.title}</p>
               </div>
               {!this.state.showBackstory
                  ? <PremiseView story={this.props.story} toggleShowBackstory={this.toggleShowBackstory} />
                  : <BackstoryView story={this.props.story} toggleShowBackstory={this.toggleShowBackstory} />  
               }
               <div className="list-item__small-container">
                  <label className="list-item__small-text">Mark as solved:</label>
                  <input 
                     className="list-item__checkbox" 
                     type="checkbox" 
                     onClick={this.props.toggleSolved}
                     defaultChecked={this.props.solved}
                  />
               </div>
            </div>
         </Modal>
      )
   }   
}
