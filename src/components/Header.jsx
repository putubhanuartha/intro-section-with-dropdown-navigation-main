import React, { useContext, useState } from "react";
import "./Header.css";
import App, { AppContext } from "../App";
export default function Header() {
  const { isCollapse, setIsCollapse } = useContext(AppContext);
  return (
    <div className="bg-white p-3">
      <div className="container mx-auto flex justify-between">
        <div id="logo">
          <a href="#">
            <img
              src="/assets/logo/logo.svg"
              alt=""
              className="w-24 h-9 object-fill"
            />
          </a>
        </div>
        <div
          id="hum-btn"
          className="w-8 h-6 flex flex-col justify-between cursor-pointer relative z-10"
          onClick={() => {
            setIsCollapse(!isCollapse);
          }}
        >
          <div className={`underline ${isCollapse && "active"}`}></div>
          <div className={`underline ${isCollapse && "active"}`}></div>
          <div className={`underline ${isCollapse && "active"}`}></div>
        </div>
      </div>
    </div>
  );
}
