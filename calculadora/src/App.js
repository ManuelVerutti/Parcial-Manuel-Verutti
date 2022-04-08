import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App(props) {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState("");
  const [textoDisplay, setTextoDisplay] = useState("0");
  const [estaOperando, setEstaOperando] = useState(false);
  const [pusoPunto, setPusoPunto] = useState(false);


  function clickeoNumero(valor) {
    if (!estaOperando) {

      setTextoDisplay(numero1 + valor);
      setNumero1(numero1 + valor);
    } else {
      console.log("SegundoNumero")
      setTextoDisplay(numero2 + valor);
      setNumero2(numero2 + valor);
    }

  }

  function clickeoPunto() {
    if (!pusoPunto) {
      if (!estaOperando) {

        setTextoDisplay(numero1 + ".");
        setNumero1(numero1 + ".");
        setPusoPunto(true);
      } else {
        console.log("SegundoNumero")
        setTextoDisplay(numero2 + ".");
        setNumero2(numero2 + ".");
        setPusoPunto(true);
      }
    }
  }
  function borrar() {
    setNumero1("");
    setNumero2("");
    setPusoPunto(false);
    setEstaOperando(false);
    setOperacion("")
    setTextoDisplay("0")

  }

  function clickeoOperacion(valor) {
    if (!estaOperando) {
      setTextoDisplay(valor);
      setOperacion(valor);
      setEstaOperando(true);
      setPusoPunto(false);
    }

  }
  function resultado(valor) {
    let result = 0;
    switch (valor) {
      case "+":
        result = Number(numero1)+Number(numero2);
        break;
      case "-":
        result = Number(numero1)-Number(numero2);
        break;
      case "*":
        result = Number(numero1)*Number(numero2);
        break;
      case "/":
        result = Number(numero1)/Number(numero2);
        break;
        default:
          break;
    }
    setTextoDisplay(result);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tu Calculadora Online
        </h1>
        <div className="calculadora">
          <h4 className='display'>{textoDisplay}</h4>
          <div className="teclado">
            <div className='numerosR'>
              <div className='numeros'>
                <button onClick={() => { clickeoNumero(1) }} >1</button>
                <button onClick={() => { clickeoNumero(2) }} >2</button>
                <button onClick={() => { clickeoNumero(3) }} >3</button>
              </div>
              <div className='numeros'>
                <button onClick={() => { clickeoNumero(4) }} >4</button>
                <button onClick={() => { clickeoNumero(5) }} >5</button>
                <button onClick={() => { clickeoNumero(6) }} >6</button>
              </div>
              <div className='numeros'>
                <button onClick={() => { clickeoNumero(7) }} >7</button>
                <button onClick={() => { clickeoNumero(8) }} >8</button>
                <button onClick={() => { clickeoNumero(9) }} >9</button>
              </div>
              <div className='numeros'>
                <button onClick={() => { borrar() }} >C</button>
                <button onClick={() => { clickeoNumero(0) }} >0</button>
                <button onClick={() => { clickeoPunto() }} >.</button>
              </div>
            </div>
            <div className='operadores'>
              <button onClick={() => { clickeoOperacion("+") }} >+</button>
              <button onClick={() => { clickeoOperacion("-") }} >-</button>
              <button onClick={() => { clickeoOperacion("*") }} >*</button>
              <button onClick={() => { clickeoOperacion("/") }} >/</button>
              <button onClick={() => { resultado(operacion)}} >=</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
