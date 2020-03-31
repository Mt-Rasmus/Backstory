
import React from 'react';

const PremiseView = (props) => {
   return (
      <div className="modal__body">
         <p className="modal__subtitle">Premise:</p>
         <p className="modal__text">{props.premise}</p>
         <button 
            className="button button--standard button-modal" 
            onClick={props.toggleShowBackstory}>
            Backstory
         </button>         
      </div>
   )

}

export default PremiseView