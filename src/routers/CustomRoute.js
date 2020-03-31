
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

const CustomRoute = ({ component: Component, ...props }) => {
   return (
      <Route {...props} component={(props) => (
         <div>
            <Header/>  
            <Component {...props} />
         </div>
      )}/>
   )
}

export default CustomRoute;