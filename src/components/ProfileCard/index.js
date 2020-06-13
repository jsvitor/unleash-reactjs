import React, { Component } from 'react';
import githubApi from '../../services/githubApi';


/* Styles */
import './styles.css';

class ProfileCard extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const response = await githubApi.get(`/users/jszvitor`);
    const data = response.data;

    this.setState({ data });
  };
  
  render() {
    const user = this.state.data;

    return (
      <div className="card">
        <img src="https://avatars3.githubusercontent.com/u/47458489?v=4" alt="avatar"/>
        <div className="card-body">
          <h1 className="name">
            <span>{user.name}</span>
            <span>{user.login}</span>
          </h1>
          <p className="description">{user.bio}</p>
        </div>
      </div>
    )
  }
};


export default ProfileCard;