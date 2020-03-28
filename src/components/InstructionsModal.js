
import React from 'react';
import Modal from 'react-modal';
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

const InstructionsModal = (props) => {
   return (
      <Modal
         isOpen={props.showModal}
         onRequestClose={props.handleToggleModal} // clicking esc or outside modal
         closeTimeoutMS={200}
         className="modal"
      >
         <p>
            These are the instructions
         </p>
         <button className="button" onClick={props.handleToggleModal}>
            Close
         </button>
      </Modal>
   )
}

export default InstructionsModal;