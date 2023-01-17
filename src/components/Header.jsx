import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import App, { AppContext } from "../App";
import arrowUp from "/assets/icon/icon-arrow-up.svg";
import arrowDown from "/assets/icon/icon-arrow-down.svg";
import listNavLink from "../data/listNavLink";
// Local Components
function Dropdown(props) {
  const imgRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    isActive
      ? imgRef.current.setAttribute("src", `${arrowUp}`)
      : imgRef.current.setAttribute("src", `${arrowDown}`);
  }, [isActive]);
  return (
    <li
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="relative cursor-pointer"
    >
      <span className="flex items-center">
        <a
          href="#"
          className="mr-3"
        >
          {props.text}
        </a>
        <img
          ref={imgRef}
          src={arrowDown}
          alt=""
        />
      </span>
      <div
        className={`absolute  right-0 rounded-xl shadow-[0_0_15px_0px_rgba(0,0,0,0.3)] py-4 mt-3 ${
          isActive ? "translate-y-0 opacity-1" : "-translate-y-16 opacity-0"
        } transition-all duration-300`}
      >
        <ul>
          {props.list.map((el) => {
            console.log(el);
            return (
              <li className="mb-3 hover:bg-gray-200">
                <a
                  href="#"
                  className="bg-red-500"
                >
                  {el.li ? (
                    <span className="flex justify-start w-36 px-4">
                      <img
                        src={el.path}
                        alt=""
                        className="object-fill mr-4 w-4"
                      />
                      <span>{el.li}</span>
                    </span>
                  ) : (
                    <span className="px-4 w-28 flex">{el}</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
export default function Header() {
  const { isCollapse, setIsCollapse } = useContext(AppContext);
  useEffect(() => {
    const size = window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setIsCollapse(false);
      }
    });
    return () => {
      removeEventListener("resize", size);
    };
  });
  const handleDropDown = (e) => {
    if (e.target.tagName === "IMG") {
      e.target.parentElement.nextElementSibling.classList.toggle("expand");
      const arrayList = Array.from(
        e.target.parentElement.nextElementSibling.firstElementChild.children
      );
      arrayList.forEach((el) => {
        el.classList.toggle("expand");
      });
      if (e.target.getAttribute("src") === arrowDown) {
        e.target.setAttribute("src", `${arrowUp}`);
      } else {
        e.target.setAttribute("src", `${arrowDown}`);
      }
    } else {
      e.target.nextElementSibling.classList.toggle("expand");
      const arrayList = Array.from(
        e.target.nextElementSibling.firstElementChild.children
      );
      arrayList.forEach((el) => {
        el.classList.toggle("expand");
      });
      if (e.target.lastElementChild.getAttribute("src") === arrowDown) {
        e.target.lastElementChild.setAttribute("src", `${arrowUp}`);
      } else {
        e.target.lastElementChild.setAttribute("src", `${arrowDown}`);
      }
    }
  };
  return (
    <div className="bg-white">
      <div className="container mx-auto flex justify-between items-center lg:justify-start p-8 xl:px-16 ">
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
          id="navbar"
          className="justify-between w-full items-center hidden lg:flex"
        >
          <ul className="flex lg:ml-4 xl:ml-12 2xl:ml-16">
            {listNavLink.map((el, index) => {
              return (
                <Dropdown
                  key={index}
                  text={el.text}
                  list={el.list}
                />
              );
            })}
            <li>
              <span>
                <a href="">Careers</a>
              </span>
            </li>
            <li>
              <span>
                <a href="">About</a>
              </span>
            </li>
          </ul>
          <div>
            <ul className="flex items-center">
              <li>
                <button className="text-medium-gray py-1 px-3 mr-6">
                  Login
                </button>
              </li>
              <li>
                <button className="text-medium-gray py-1 px-3 border-2 border-almost-black rounded-xl ">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="navbar-collapse"
          className={`fixed top-0 bottom-0 right-0 w-56 bg-white z-10 ${
            isCollapse ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 py-8 px-6 overflow-hidden lg:hidden`}
        >
          <div className="flex justify-end ">
            <img
              src="/assets/icon/icon-close-menu.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => {
                setIsCollapse(!isCollapse);
              }}
            />
          </div>
          <ul className="mt-11 flex flex-col justify-between">
            {listNavLink.map((el, index) => {
              return (
                <li
                  key={index}
                  className=""
                >
                  <a
                    onClick={(e) => {
                      handleDropDown(e);
                    }}
                    className={`${isCollapse ? "null" : "hidelist"}`}
                    href="#"
                  >
                    {el.text}
                    <img
                      src={arrowDown}
                      alt=""
                      className="ml-2 inline-block"
                    />
                  </a>
                  <div
                    id="menu-expanded"
                    className="w-full max-h-0 transition-all duration-500 overflow-hidden"
                  >
                    <ul>
                      {el.list.map((el, index) => {
                        const delayValue = () => {
                          switch (index) {
                            case 0:
                              return "delay-75";
                            case 1:
                              return "delay-100";
                            case 2:
                              return "delay-150";
                            case 3:
                              return "delay-200";
                          }
                        };
                        return (
                          <li
                            className={`translate-x-0 transition-transform duration-700 ${delayValue()}`}
                          >
                            <a href="">
                              {el.li ? (
                                <div className="flex items-center">
                                  <img
                                    src={el.path}
                                    alt=""
                                    className="object-fill mr-4 w-4"
                                  />
                                  {el.li}
                                </div>
                              ) : (
                                <div>{el}</div>
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}

            <li>
              <a
                className={`${isCollapse ? "null" : "hidelist"}`}
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className={`${isCollapse ? "null" : "hidelist"}`}
                href="#"
              >
                About
              </a>
            </li>
          </ul>
          <div>
            <ul className="mt-3">
              <li>
                <button className="text-medium-gray py-2 w-full">Login</button>
              </li>
              <li>
                <button className="text-medium-gray w-full py-2 border-2 border-almost-black rounded-2xl mt-2">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="hum-btn"
          className="w-8 h-6 flex flex-col justify-between cursor-pointer relative lg:hidden"
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
