import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


/*const saludo = <h1>HOLA MUNDO</h1>;

const divRoot = document.querySelector('#root');

ReactDOM.render(saludo,divRoot);

console.log(divRoot)*/



const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp numero={0}/>,divRoot);

//console.log(divRoot)




