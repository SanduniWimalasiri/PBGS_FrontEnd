import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListAdmin from './components/ListAdmin';
import footerComponent from './components/footerComponent';
import headerComponent from './components/headerComponent';
import addAdminComponent from './components/addAdminComponent';
import updateAdminComponent from './components/updateAdminComponent';

function App() {
  return (
    <div>
      
        <Router>
        
          <headerComponent />
            <div className="container">
            <Switch>
              <Route path= "/" exact component = {ListAdmin}></Route>
              <Route path= "/admins" component = {ListAdmin}></Route>
              <Route path= "/add-admin" component = {addAdminComponent}></Route>
              <Route path= "/update-admin/:id" component = {updateAdminComponent}></Route>
            </Switch>
            </div>
          <footerComponent />
        
        </Router>
    </div>
   
  );
}

export default App;

