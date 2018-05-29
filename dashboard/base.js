import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Header from './components/header';
import Activities from './components/table';
import 'antd/dist/antd.css';

class Base extends Component {
  render() {
    return (
     <div style={{ background: '#ECECEC'}}>
      <Activities />
     </div>
    )
  }
}

ReactDOM.render (
  <Base />,
  document.getElementById('right-panel')
)
