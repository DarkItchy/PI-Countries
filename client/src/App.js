import './App.css';
import { Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route exact path={"/"} component={LandingPage}/>
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/country:id"} render={({match}) => <CountryDetail id={match.params.id}/>}/>
      </div>
    </React.Fragment>
  );
}

export default App;
