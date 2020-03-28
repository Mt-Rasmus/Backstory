
import React from 'react';
import { Link } from 'react-router-dom';
import InstructionsModal from './InstructionsModal';

export default class StartPage extends React.Component {
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
         <div className="content-container">
            <Link to="/stories">
               <button className="button button--standard">Stories</button>
            </Link>

            <button className="button button--standard" onClick={this.toggleShowModal}>How to play</button>
            
            <div>
               <InstructionsModal 
                  showModal={this.state.showModal} 
                  handleToggleModal={this.toggleShowModal} 
               />           
            </div>            
         </div>
      )
   }
}
