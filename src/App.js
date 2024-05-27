import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  country = "in";
  pageSize = 8;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={< News key="general" pageSize={this.pageSize} category="general" country={this.country} />} />
            <Route exact path="/business"  element={<News key="business" pageSize={this.pageSize} category="business" country={this.country} />} />
            <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" country={this.country} />} />
            <Route exact path="/health"  element={<News key="health" pageSize={this.pageSize} category="health" country={this.country} />} />
            <Route exact path="/sciences"  element={<News key="sciences" pageSize={this.pageSize} category="sciences" country={this.country} />} />
            <Route exact path="/sports"  element={<News key="sports" pageSize={this.pageSize} category="sports" country={this.country} />} />
            <Route exact path="/technology"  element={<News key="technology" pageSize={this.pageSize} category="technology" country={this.country} />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
