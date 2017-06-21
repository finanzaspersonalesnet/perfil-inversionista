import React, { Component } from 'react';
import './Profile.css';
import './bootstrap/css/bootstrap.min.css';

class Profile extends Component {
  render() {
    const { profile } = this.props;
    const { title, description } = profile;
    return (
      <div className="profile">
        <div className="panel panel-primary">
          <div className="panel-heading">{title}</div>
          <div className="panel-body">
            {description}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
