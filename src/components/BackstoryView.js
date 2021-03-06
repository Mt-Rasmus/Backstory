
import React from 'react';

const BackstoryView = (props) => {
   const addDefaultSrc = (ev) => {
      ev.target.src = `/images/premises/premise${props.story.id}.png`;
   }
   return (
      <div className="modal__body modal-transition-in">
         <div className="icon-container-modal">
            <div className="icon-container-sub">
               <img onError={addDefaultSrc} className="icon"
                  src={`/images/backstories/backstory${props.story.id}.png`} alt=""/>
            </div>      
         </div>
         <p className="modal__subtitle">Backstory:</p>
         <p className="modal__text">{props.story.backstory}</p>
         <button 
            className="button button--standard button-modal" 
            onClick={props.toggleShowBackstory}>
            Premise
         </button>        
      </div>
   )
}

export default BackstoryView