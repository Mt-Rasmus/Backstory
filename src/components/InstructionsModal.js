
import React from 'react';
import Modal from 'react-modal';
import instructions from '../fixtures/instructions';
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

const InstructionsModal = (props) => {
   return (
      <Modal
         isOpen={props.showModal}
         onRequestClose={props.handleToggleModal} // clicking esc or outside modal
         closeTimeoutMS={200}
         className="modal inner-modal"
         style={{overlay:{backgroundColor:"rgba(0,0,0,0.25)"}}}
      >
         <p className="modal__text-big">
            {instructions}
         </p>
         <button className="button button--standard" onClick={props.handleToggleModal}>
            Close
         </button>
      </Modal>
   )
}

export default InstructionsModal;

