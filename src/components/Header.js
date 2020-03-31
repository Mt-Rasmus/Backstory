import React from 'react';
import { Link } from 'react-router-dom';
import InstructionsModal from './InstructionsModal';

export default class Header extends React.Component {// props gets passed in, so just destructuring it
   
   constructor(props) {
      super(props);
      this.state = {
         showModal: false
      };
   }

   toggleShowModal = () => {
      this.setState({ showModal: !this.state.showModal })
   }
   
   render() {
      return (   
         <header className="header">
            <div className="content-container">
               <div className="header__content">
                  <Link className="header__title" to="/dashboard">
                     <h1>Backstory</h1>
                  </Link>
                  <h1 className="header__text" onClick={this.toggleShowModal}>How to Play</h1>
               </div>
               <div>
                  <InstructionsModal 
                     showModal={this.state.showModal} 
                     handleToggleModal={this.toggleShowModal} 
                  />
               </div>      
            </div>
         </header>
      )
   }
};

