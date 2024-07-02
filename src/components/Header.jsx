import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="bg-slate-200 shadow-sm flex items-center   mx-auto justify-evenly">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl ">React Fundamental</h1>
        </Link>
        <ul className="flex gap-3">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/click">
            <li>Click</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
