import React from 'react';
import './../App.css'; 

const ProfilePage = () => {
  return (
    <>
      <h1 className="profile-title">Profile Page</h1>
      <div className="profile-container">
        <div className="profile-left">
          <h1>Citra Mutia Lestari</h1>
          <p>Cimahi, Jawa Barat</p>
          <p>citramutia033@gmail.com</p>
        </div>
        <div className="profile-right">
          <img 
            src="https://i.pinimg.com/736x/6a/fd/1d/6afd1d8ae3f3cc7dc9baba8be29826a9.jpg" 
            alt="Profile" 
            className="profile-photo" 
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
