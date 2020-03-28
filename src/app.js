
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css'; // module to set browser styling to a universal default
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

const jsx = (
   <AppRouter />
);

let hasRendered = false;
const renderApp = () => {
   if(!hasRendered) {
      ReactDOM.render(jsx, document.getElementById("app"));
      hasRendered = true;
   }
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

renderApp();
history.push('/dashboard');


