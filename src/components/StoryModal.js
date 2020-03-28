
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

   render () {
      return (
         <Modal
            isOpen={this.props.showModal}
            onRequestClose={this.props.handleCloseStoryModal} // clicking esc or outside modal
            closeTimeoutMS={200}
            className="modal"
         >
         <button 
            className="button button--standard button-modal" 
            onClick={this.props.handleCloseStoryModal}>
            x
         </button>
         <h3 className="modal__title">{this.props.story.title}</h3>
         {!this.state.showBackstory
            ? <PremiseView premise={this.props.story.premise} toggleShowBackstory={this.toggleShowBackstory} />
            : <BackstoryView backstory={this.props.story.backstory} toggleShowBackstory={this.toggleShowBackstory} />  
         }
      </Modal>
      )
   }   
}
