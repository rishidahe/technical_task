// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './HeaderLayout';
import Home from './Home';
import { SegmentPage } from './SegmentPage';
import { DefaultConfiguration } from './DefaultConfPage';
import { ErrorPage } from './ErrorPage';
import Authentication from './Authentication';
import { StanderdPage } from './StandardPage';
import { Interior } from './Interior';
import { ConfFooter } from './confFooter';
import SignIn  from './Components/SignIn';
import { InvoicePage } from './InvoicePage';
import { Exterior } from './Exterior';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/" element={<Header />} >
          <Route path="Home" element={<Home />} />
          <Route path="/SegmentPage" element={<SegmentPage/>}/>
          <Route path="SignIn/SegmentPage" element={<SegmentPage/>}/>
          {/* <Route path="/DefaultConfPage/:code" element={<DefaultConfiguration/>}/> */}
          <Route path="/DefaultConfPage" element={<DefaultConfiguration/>}/>
          <Route path="/Registration" element={<Authentication/>}/>
          <Route path="/StandardPage" element={<StanderdPage/>}/>
          <Route path="/SignIn" element={<Login/>}/>
          <Route path="/InvoicePage" element={< InvoicePage />}/>
          <Route path="/Exterior" element={< Exterior />}/>
          <Route path="*" element={<ErrorPage/> }/>
          </Route>
          <Route path="/Interior" element={<Interior/>}/>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

//chatGpt1
// import React from "react"; function App() {
//   const arr1 = [5, 6, 7]; 
//   const arr2 = [55, 56, 66, 67, 77, 79];
//   const result = arr1.map((num) => {
//     return arr2.filter((elem) => elem.toString().startsWith(num.toString()));
//   });    // Render dropdown lists for each element in arr1  
//   const dropdowns = arr1.map((num, index) => {
//     const matchingElements = result[index];
//     const options = matchingElements.map((elem) => (
//       <option value={elem} key={elem}>         {elem}       </option>));
//     return (
//       <div key={num}>         <label htmlFor={`dropdown-${num}`}>{`Dropdown for ${num}:`}</label>
//         <select id={`dropdown-${num}`}>{options}</select>       </div>);
//   });
//   return <div>{dropdowns}</div>;
// } export default App;

//chatgpt2
// import React from "react";  function App() {   
//   const arr1 = [5, 6, 7];   const arr2 = [55, 56, 66, 67, 77, 79];    
//   const result = arr1.map((num) => {     
//     return arr2.filter((elem) => elem.toString().startsWith(num.toString()));   });   
//      // Render dropdown lists for each element in arr1  
//  const dropdowns = arr1.map((num, index) => {     
//   const matchingElements = result[index];     
//   const options = matchingElements.map((elem) => (      
//      <option value={elem} key={elem}>         {elem}       </option>     ));  
//          return (       <div key={num}>      
//             <label htmlFor={`dropdown-${num}`}>{`Dropdown for ${num}:`}</label>     
//                 <select id={`dropdown-${num}`}>{options}</select>       </div>     );   });   
//                  return <div>{dropdowns}</div>; }  export default App;