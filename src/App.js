import './App.css';
import Nav from './components/Nav.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import React, { useState } from 'react';


function App() {
  const[Mode, setMode] = useState('light');
  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  };
  
  const [alert, setAlert]=useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>

    
      
    <Nav title="Text World"  home="Home" about="About Us" Dropdown='Contact Us' mode={Mode} toggleMode={toggleMode}/>
    < Alert alert={alert} />
    <TextForm textarea="Enter The Text Below: " mode={Mode} showAlert={showAlert}/>
       
     
   
    
    </>
  );
}

export default App;

// import About from './components/About.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


// return (
//   <>

//   <Router>
    
//   <Nav title="Text World"  home="Home" about="About Us" Dropdown='Contact Us' mode={Mode} toggleMode={toggleMode}/>
//   < Alert alert={alert} />
//    <Routes>
//      <Route exact path='/' element={<TextForm textarea="Enter The Text Below: " mode={Mode} showAlert={showAlert}/>}></Route>
//      <Route exact path='/about' element={< About  />}></Route>
//      {/* <Route exact path='/contact' element={< Contact />}></Route> */}
//    </Routes>
//   </Router>
  
//   </>
// );