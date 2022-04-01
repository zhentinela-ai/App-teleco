import React, { useState } from "react";
import {
  Link,
  LinkProps,
  useMatch,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import SignUp from "../Auth/SignUp";
import Home from "../Home/Home";

const NavbarIn = () => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDrowpdown = () => {
    setDropdown(!dropdown);
  };

  const navigate = useNavigate();

  const Profile = () => {
    navigate("/api/profile");
  };

  const SignOut = () => {
    navigate("/api/auth/signup");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/api/home">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Buscar fallas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Mis diseños
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Crear red
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Adicionar fallas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Información util
              </Link>
            </li>
            {/* <li className="nav-item">
              <CustomLink to="/">Main</CustomLink>
            </li> */}
          </ul>
        </div>

        <div className="dropdown justify-content-center p-4">
          <Dropdown
            isOpen={dropdown}
            toggle={openCloseDrowpdown}
            className="btn"
            direction="start"
          >
            <DropdownToggle caret>Más</DropdownToggle>
            <DropdownMenu flip>
              <DropdownItem header disabled>
                <SignUp />
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={Profile}>Perfil</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={SignOut}>Sign Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="">
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        // className={(data) => console.log(data)}
        {...props}
        to={to}
      >
        {children}
      </Link>
      {match && " (activate)"}
    </div>
  );
}

export default NavbarIn;
