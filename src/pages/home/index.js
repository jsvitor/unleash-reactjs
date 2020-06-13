import React from 'react';
import Navbar from '../../components/Navbar';

import './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container" style={{marginTop: 50}}>
          
          <img
            alt="fitness stats"
            src={require('../../assets/img/undraw_fitness_stats_sht6.svg')}
          />
          <h1>
            <span>Unleash your flow</span>
            <span>#UCanBeMoreTomorrow</span>            
          </h1>
        </div>
      </>
    )
  }
}
