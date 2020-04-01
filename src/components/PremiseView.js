
import React from 'react';

const PremiseView = (props) => {
   return (
      <div className="modal__body">
         <img src={`/images/premises/premise${props.story.id}.png`} alt="" className="icon"/>
         <p className="modal__subtitle">Premise:</p>
         <p className="modal__text">{props.story.premise}</p>
         <button 
            className="button button--standard button-modal" 
            onClick={props.toggleShowBackstory}>
            Backstory
         </button>         
      </div>
   )

}

export default PremiseView