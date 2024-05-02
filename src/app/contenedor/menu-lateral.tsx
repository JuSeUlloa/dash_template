import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../../assets/images/users/user4.jpg";
import { useState } from "react";
import { OPCIONES_MENU } from "../utilities/domains/opcionesMenu";
export const MenuLateral = () => {


  const [opcionesMenu] = useState(OPCIONES_MENU);


  let location = useLocation();
  const showMobilemenu = () => {
    document.getElementById("sidebarArea")?.classList.toggle("showSidebar");
  };

  return (
    <aside id="sidebar" className="sidebar-area">
      <div className="sidebarBox shadow bg-bg-dark fixedSidebar">
        <div className="d-flex">

          <div className="py-3 px-4 d-flex align-items-center border-white border-bottom-1">
            <img src={user1} alt="user" width="30" className="rounded-circle" />
            <div className="ms-3 opacity-75 text-truncate text-white">Nombre</div></div>
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
      </div>
      <div className="p-3">
        <Nav vertical className="sidebarNav">
          {opcionesMenu.map((opcion, index) =>
            opcion.children?.length ? (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={opcion.href}
                  className="nav-link collapsed py-3"
                  data-bs-target={"#menu" + index}
                  data-bs-toggle="collapse"
                >
                  <i className={opcion.icon}></i>
                  <span className="ms-3 d-inline-block">{opcion.title}</span>
                </Link>
                <ul
                  id={"menu" + index}
                  className="nav-content collapse "
                  data-bs-parent="#sidebar-nav"
                >
                  {opcion.children.map((subMenu: any, indice: number) => (
                    <li key={"sub" + indice} style={{ listStyle: "none" }}>
                      <Link className={
                        location.pathname === subMenu.href
                          ? "active nav-link fs-6"
                          : "nav-link fs-6"
                      } to={subMenu.href}>
                        {/* <i className={subMenu.iconoFuncionalidad}></i> */}
                        <span>{subMenu.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavItem>
            ) :
              (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={opcion.href}
                    className={
                      location.pathname === opcion.href
                        ? "active nav-link py-3"
                        : "nav-link py-3"
                    }
                  >
                    <i className={opcion.icon}></i>
                    <span className="ms-3 d-inline-block">{opcion.title}</span>
                  </Link>
                </NavItem>
              )
          )}
        </Nav>
      </div>

    </aside>
  );
}