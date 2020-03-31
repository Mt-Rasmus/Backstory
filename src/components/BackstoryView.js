
import React from 'react';

const BackstoryView = (props) => {
   return (
      <div className="modal__body">
         <p className="modal__subtitle">Backstory:</p>
         <p className="modal__text">{props.backstory}</p>
         <button 
            className="button button--standard button-modal" 
            onClick={props.toggleShowBackstory}>
            Premise
         </button>        
      </div>
   )
}

export default BackstoryView