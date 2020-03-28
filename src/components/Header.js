import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => ( // props gets passed in, so just destructuring it
   <header className="header">
      <div className="content-container">
         <div className="header__content">
            <Link className="header__title" to="/dashboard">
               <h1>Backstory</h1>
            </Link>
            <div className="header__title">
               <h1>How to Play</h1>
            </div>
         </div>      
      </div>

   </header>
);

export default Header;