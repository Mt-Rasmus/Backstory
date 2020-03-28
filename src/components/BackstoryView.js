
import React from 'react';

const BackstoryView = (props) => {
   return (
      <div>
         {props.backstory}
         <button 
            className="button button--standard button-modal" 
            onClick={props.toggleShowBackstory}>
            Premise
         </button>
         <input type="checkbox" id="vehicle1" onClick={props.toggleSolved}></input>
         <label htmlFor="vehicle1">solved</label><br></br>            
      </div>
   )
}

export default BackstoryView