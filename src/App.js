import './App.css';

import React, {useState,} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

  const country = "in";
  const pageSize = 8;
  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0);

  // setProgress =(progress)=>{
  //   setState({progress : progress})
  // }

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
            <Route exact path='/' element={ < News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country={country} />} />
            <Route exact path="/business"  element={ < News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" country={country} />} />
            <Route exact path="/entertainment"  element={ < News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" country={country} />} />
            <Route exact path="/health"  element={ < News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" country={country} />} />
            <Route exact path="/general"  element={ < News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country={country} />} />
            <Route exact path="/sciences"  element={ < News setProgress={setProgress} apiKey={apiKey} key="sciences" pageSize={pageSize} category="sciences" country={country} />} />
            <Route exact path="/sports"  element={ < News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" country={country} />} />
            <Route exact path="/technology"  element={ < News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" country={country} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  
}
export default App;
