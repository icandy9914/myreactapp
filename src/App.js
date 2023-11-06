import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  let [mode,setMode] = useState('light');
  let [alert,setAlertType] = useState(null);

  const showAlert = (message,type)=>{
    setAlertType({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertType(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert('Dark mode has been enabled','danger');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='#fff';
      showAlert('Dark mode has been disabled','danger');
    }
  }
  
  return (
    <>
    
<Navbar title="Hi Ganesh" aboutTxt="Vishwakrama" mode={mode} toggleMode={toggleMode}/>
{/* <About/> */}
<Alert alert={alert} />
<TextForms showAlert = {showAlert} headingTxt="Write your notes here" mode={mode}/>

</>
  );
}

export default App;
