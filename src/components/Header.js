import React from "react";

const Header = ({ user }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-rose-800">Postify</div>
      <div className="flex items-center space-x-3">
        <span className="text-gray-700 font-medium">{user.name}</span>
        <img
          src={user.photo}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
