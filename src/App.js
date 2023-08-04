import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert'
import Form from './Components/Form';
import Footer from './Components/Footer'
import About from './Components/About'
import Error from './Components/Error'

import './App.css';

import {BrowserRouter as Main, Route, Routes} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      }, 1500);

    }
  
  return (
    <>
    <Main>
    <Navbar  title ="Convert Case"/>
    <Alert alert={alert} />
    <Routes>
    <Route exact path="/" element={<Form heading="eneter your text here" showAlert={showAlert} Name="CONVERT YOUR CASE" Submit1 = "UPPER CASE" Submit2 ="lower case" Submit3 ="Capitalise Case" Submit4 = "Sentence case" 
    Submit5 = "aLtErNaTe cAsE" Submit6 = "InVeRsE CaSe" Submit7 = "reverse case"/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </Main>
  
    
    
    
    
   </>
  );
}

export default App;
