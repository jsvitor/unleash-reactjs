import React, { Component } from 'react';

/* Styles */
import './styles.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://avatars3.githubusercontent.com/u/47458489?v=4" alt="avatar"/>
        <div className="card-body">
          <h1 className="name">
            <span>José Vitor</span>
            <span id="user-name">jszvitor</span>
          </h1>
          <p className="description">Web developer full stack 👨🏻‍💻 #ReactJS #NodeJS</p>
        </div>
      </div>
    )
  }
};


export default ProfileCard;