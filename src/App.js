import React from 'react';
import { BrowserRouter, Switch,  Route} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
    </BrowserRouter>
  );
};