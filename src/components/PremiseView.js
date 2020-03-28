
import React from 'react';

const PremiseView = (props) => {
   return (
      <div>
         {props.premise}
         <button 
            className="button button--standard button-modal" 
            onClick={props.toggleShowBackstory}>
            Backstory
         </button>         
      </div>
   )

}

export default PremiseView