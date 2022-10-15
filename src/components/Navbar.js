import React from "react";
import logo from "../assets/premier-league-logo.svg";

export default function Navbar() {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto h-20 flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="Premier League Logo" className="w-12" />
        </a>

        <nav className="text-primary-color text-lg font-bold flex gap-8">
          <a href="#">Players</a>
          <a href="#">Compare Players</a>
        </nav>
      </div>
    </div>
  );
}
