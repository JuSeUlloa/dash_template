import { Button, Nav, NavItem, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
export const MenuLateral = () => {
    const navigation = [
        {
            title: "Dashboard",
            href: "/starter",
            icon: "bi bi-speedometer2",
        },
        {
            title: "Alert",
            href: "/alerts",
            icon: "bi bi-bell",
            children: [
                {
                    title: "1",
                    href: "/starter",
                },
                {
                    title: "2",
                    href: "/starter",
                },
                {
                    title: "3",
                    href: "/starter",
                },
            ]
        },
        {
            title: "Badges",
            href: "/badges",
            icon: "bi bi-patch-check",
        },
        {
            title: "Buttons",
            href: "/buttons",
            icon: "bi bi-hdd-stack",
        },
        {
            title: "Cards",
            href: "/cards",
            icon: "bi bi-card-text",
        },
        {
            title: "Grid",
            href: "/grid",
            icon: "bi bi-columns",
        },
        {
            title: "Table",
            href: "/table",
            icon: "bi bi-layout-split",
        },
        {
            title: "Forms",
            href: "/forms",
            icon: "bi bi-textarea-resize",
        },
        {
            title: "Breadcrumbs",
            href: "/breadcrumbs",
            icon: "bi bi-link",
        },
        {
            title: "About",
            href: "/about",
            icon: "bi bi-people",
        },
    ];
    const showMobilemenu = () => {
        document.getElementById("sidebarArea")?.classList.toggle("showSidebar");
    };
    let location = useLocation();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
        <aside id="sidebar" className="sidebar">
        <Link
          to="/dashboard"
          className="d-flex align-items-center pb-3 mb-3 link-dark border-bottom"
        >
          <div>
            <span className="fs-5 fw-semibold">{}</span>
          </div>
        </Link>
  
        <ul className="sidebar-nav" id="sidebar-nav">
          {navigation?.map((opcion, indice) =>
            opcion.children?.length ? (
              <li className="nav-item" key={"li" + indice}>
                <a
                  className="nav-link collapsed"
                  data-bs-target={"#menu" + indice}
                  data-bs-toggle="collapse"
                  href="/#"
                >
                  <i className={opcion.icon}></i>
                  <span>{opcion.title}</span>
                  <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                  id={"menu" + indice}
                  className="nav-content collapse "
                  data-bs-parent="#sidebar-nav"
                >
                  {opcion.children.map((subMenu: any, otroIndice: number) => (
                    <li key={"sub" + otroIndice}>
                      <Link to={subMenu.rutaFuncionalidad}>
                        <i className={subMenu.iconoFuncionalidad}></i>
                        <span>{subMenu.nombreFuncionalidad}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="nav-item" key={indice}>
                <Link to={opcion.href} className="nav-link collapsed">
                  <i className={opcion.icon}></i>
                  <span>{opcion.title}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>
    );
}