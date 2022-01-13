import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Trips from './components/Trips';
import Hotels from './components/Hotels';
import Drivers from './components/Drivers';
import { useDispatch } from 'react-redux'
import { fetchData, fetchDrivers, fetchHotels } from './redux/actions'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData());
    dispatch(fetchDrivers());
    dispatch(fetchHotels());
  },[])
  return (
     <Router>
      <div className="App">
        <Header />
        {/* <Trips /> */}
        <Routes>
          <Route exact path="/" element={<Trips />}/>
          <Route exact path="/drivers" element={<Drivers />}/>
          <Route exact path="/hotels" element={<Hotels />}/>
          {/* <Route path="/trips">
            <Trips />
          </Route> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
