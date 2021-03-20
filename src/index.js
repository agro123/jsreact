//CRISTIAN MEDINA 1824150
import React from 'react';
import ReactDOM from 'react-dom';

import Contador from './components/contador';

const divRoot = document.querySelector('#root');

ReactDOM.render(<Contador name="Cristian Medina" inicial={2}/>, divRoot);