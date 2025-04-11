import React from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = React.useState("");
  const [convType, setconvType] = React.useState('C2F');
  const [Temp, setTemp] = React.useState("");

  const getInputUnit = (type) => {
    switch(type) {
      case 'C2F':
      case 'C2K':
      case 'C2R':
        return 'Celsius';
      case 'F2C':
      case 'F2K':
      case 'F2R':
        return 'Fahrenheit';
      case 'K2C':
      case 'K2F':
      case 'K2R':
        return 'Kelvin';
      case 'R2C':
      case 'R2F':
      case 'R2K':
        return 'Rankine';
      default:
        return 'Temperature';
    }
  };

  function convertTemp() {
    if (isNaN(input) || input === "") {
      alert("Please enter a valid number");
      return;
    }

    let convertedTemp;

    if (convType === 'C2F') {
      convertedTemp = (parseFloat(input) * 9/5) + 32;
      setTemp(convertedTemp.toFixed(2) + "°F");
    } else if (convType === 'F2C') {
      convertedTemp = (parseFloat(input) - 32) * 5/9;
      setTemp(convertedTemp.toFixed(2) + "°C");
    } else if (convType === 'K2C') {
      convertedTemp = parseFloat(input) - 273.15;
      setTemp(convertedTemp.toFixed(2) + "°C");
    } else if (convType === 'C2K') {
      convertedTemp = parseFloat(input) + 273.15;
      setTemp(convertedTemp.toFixed(2) + "K");
    } else if (convType === 'F2K') {
      convertedTemp = (parseFloat(input) - 32) * 5/9 + 273.15;
      setTemp(convertedTemp.toFixed(2) + "K");
    } else if (convType === 'K2F') {
      convertedTemp = (parseFloat(input) - 273.15) * 9/5 + 32;
      setTemp(convertedTemp.toFixed(2) + "°F");
    } else if (convType === 'C2R') {
      convertedTemp = (parseFloat(input) * 9/5) + 491.67;
      setTemp(convertedTemp.toFixed(2) + "°R");
    } else if (convType === 'R2C') {
      convertedTemp = (parseFloat(input) - 491.67) * 5/9;
      setTemp(convertedTemp.toFixed(2) + "°C");
    } else if (convType === 'F2R') {
      convertedTemp = parseFloat(input) + 459.67;
      setTemp(convertedTemp.toFixed(2) + "°R");
    } else if (convType === 'R2F') {
      convertedTemp = (parseFloat(input) - 491.67) * 9/5 + 32;
      setTemp(convertedTemp.toFixed(2) + "°F");
    } else if (convType === 'K2R') {
      convertedTemp = (parseFloat(input) - 273.15) * 9/5 + 491.67;
      setTemp(convertedTemp.toFixed(2) + "°R");
    } else if (convType === 'R2K') {
      convertedTemp = (parseFloat(input) - 491.67) * 5/9 + 273.15;
      setTemp(convertedTemp.toFixed(2) + "K");
    }
  }

  return (
    <div className="container">
      <div className="converter-box">
        <h2>Temperature Converter</h2>
        <div className="input-group">
          <input 
            type="number" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Enter temperature in ${getInputUnit(convType)}`}
          />
        </div>
        <div className="controls">
          <select 
            value={convType} 
            onChange={(e) => setconvType(e.target.value)}
            className="select-type"
          >
            <option value="C2F">Celsius to Fahrenheit</option>
            <option value="F2C">Fahrenheit to Celsius</option>
            <option value="K2C">Kelvin to Celsius</option>
            <option value="C2K">Celsius to Kelvin</option>
            <option value="F2K">Fahrenheit to Kelvin</option>
            <option value="K2F">Kelvin to Fahrenheit</option>
            <option value="C2R">Celsius to Rankine</option>
            <option value="R2C">Rankine to Celsius</option>
            <option value="F2R">Fahrenheit to Rankine</option>
            <option value="R2F">Rankine to Fahrenheit</option>
            <option value="K2R">Kelvin to Rankine</option>
            <option value="R2K">Rankine to Kelvin</option>
          </select>
          <button onClick={convertTemp} className="convert-btn">Convert</button>
        </div>
        {Temp && (
          <div className="result">
            Result: {Temp}
          </div>
        )}
        <footer className="footer">
          <p>Made with ❤️ by Raj Aryan</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
