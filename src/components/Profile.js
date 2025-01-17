import React from "react";

const Profile = ({ user, postCount }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full md:w-1/3 flex-none">      
      <img
        src={user.photo}
        alt="Profile"
        className="w-72 h-72 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-center text-lg font-bold text-gray-800">{user.name}</h3>
      <p className="text-center text-gray-600">{user.email}</p>
      <div className="mt-4 text-center">
        <span className="block text-gray-500">Total Posts:</span>
        <span className="text-xl font-bold text-rose-800">{postCount}</span>
      </div>
    </div>
  );
};

export default Profile;
