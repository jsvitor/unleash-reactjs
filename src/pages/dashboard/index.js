import React from 'react';
import Navbar from '../../components/Navbar';

import './styles.css'

import ProfileCard from '../../components/ProfileCard';

export default class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container" style={{marginTop: 50}}>
          <ProfileCard />
        </div>
      </>
    )
  }
}
