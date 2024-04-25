import { Button, Nav, NavItem, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import user1 from "../../assets/images/users/user4.jpg";
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


  let location = useLocation();
  const showMobilemenu = () => {
    document.getElementById("sidebarArea")?.classList.toggle("showSidebar");
  };

  return (
    <aside id="sidebar" className="sidebar-area">
      <div className="sidebarBox shadow bg-bg-dark fixedSidebar">
        <div className="d-flex">
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
          <div className="py-3 px-4 d-flex align-items-center border-white border-bottom-1">
            <img src={user1} alt="user" width="30" className="rounded-circle" />
            <div className="ms-3 opacity-75 text-truncate text-white">Nombre</div></div>
        </div>
        <div className="p-3">

        </div>
      </div>


    </aside>
  );
}