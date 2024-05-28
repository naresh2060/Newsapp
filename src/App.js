import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  country = "in";
  pageSize = 8;
  state = {
    progress : 0
  }
  setProgress =(progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
            <Route exact path='/' element={ < News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general" country={this.country} />} />
            <Route exact path="/business"  element={ < News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business" country={this.country} />} />
            <Route exact path="/entertainment"  element={ < News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" country={this.country} />} />
            <Route exact path="/health"  element={ < News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" country={this.country} />} />
            <Route exact path="/general"  element={ < News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general" country={this.country} />} />
            <Route exact path="/sciences"  element={ < News setProgress={this.setProgress} key="sciences" pageSize={this.pageSize} category="sciences" country={this.country} />} />
            <Route exact path="/sports"  element={ < News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" country={this.country} />} />
            <Route exact path="/technology"  element={ < News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" country={this.country} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
