import React from 'react';
import { BrowserRouter, Switch,  Route} from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './components/home';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};