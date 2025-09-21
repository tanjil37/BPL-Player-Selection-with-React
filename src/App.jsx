import "./App.css";
import doller from "./assets/dollar-1.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className=" text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <li>
              <a className="btn">
             
                <span>1000000000</span>
                <span>Coin</span>
                <img src={doller} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
