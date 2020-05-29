/* eslint-disable react/jsx-fragments */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import ListGroup from '../shared/ListGroup';
import Navbar from '../Navbar/Navbar';
import TabContainer from '../TabContainer/TabContainer';
import EntryInput from '../EntryInput/EntryInput';

const App = () => {
  return (
    <main className='container-fluid'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'>
            <EntryInput />
            <div className='row'>
              <div className='col-sm'>
                <TabContainer />
              </div>
              <div className='col-sm-2'>
                <ListGroup />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
