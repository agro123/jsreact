//CRISTIAN MEDINA 1824150
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contador from './components/contador';

const divRoot = document.querySelector('#root');

ReactDOM.render(<Contador name="Cristian Medina" inicial={0}/>, divRoot);