import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Feedback from './components/Feedback';// 
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#3d4146ff';
      document.body.style.color = '#fff';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#000';
      showAlert("Light mode has been enabled", "success")
    }
  }
  const colorMode = (color) => {
    switch (color) {
      case 'blue':
        setMode('blue');
        document.body.style.backgroundColor = '#779dccff';
        document.body.style.color = '#000';
        showAlert("Blue mode has been enabled", "success");
        break;
      case 'green':
        setMode('green');
        document.body.style.backgroundColor = '#5ea741ff';
        document.body.style.color = '#000';
        showAlert("Green mode has been enabled", "success");
        break;
      case 'red':
        setMode('red');
        document.body.style.backgroundColor = '#e67979ff';
        document.body.style.color = '#000';
        showAlert("Red mode has been enabled", "success");
        break;
      case 'yellow':
        setMode('yellow');
        document.body.style.backgroundColor = '#f7ed68ff';
        document.body.style.color = '#000';
        showAlert("Yellow mode has been enabled", "success");
        break;
      default:
        break;
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextCraft" mode={mode} toggleMode={toggleMode} colorMode={colorMode} aboutText="About Us" home="Home" />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={ } /> */}
            <TextForm showAlert={showAlert} heading="Try TextCraft - Word Counter, character Counter, Remove Extra Spaces" mode={mode}></TextForm>
            {/* <Route exact path="/about" element={<About mode={mode}></About>} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
