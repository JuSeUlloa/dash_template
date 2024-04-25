import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../../assets/images/logos/adminprowhite.svg";
import user1 from "../../assets/images/users/user4.jpg";
import { ReactComponent as LogoDark } from "../../assets/images/logos/adminpro.svg";
import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const MenuSuperior = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navegacion = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const Handletoggle = () => {
        setIsOpen(!isOpen);
    };
    const showMobilemenu = () => {
        document.getElementById("sidebarArea")?.classList.toggle("showSidebar");
    };


    const cerrarSesion = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        localStorage.removeItem("tokenAutorizacion");
        navegacion("/login");
    };

    return (
        <Navbar color="white" light expand="md" className="fix-header">
            <div className="d-flex align-items-center">
                <div className="d-lg-block d-none me-5 pe-3">
                    <LogoDark />
                </div>
                <NavbarBrand href="/">
                    <LogoWhite className="d-lg-none" />
                </NavbarBrand>
                <Button
                    color="primary"
                    className=" d-lg-none"
                    onClick={() => showMobilemenu()}
                >
                    <i className="bi bi-list"></i>
                </Button>
            </div>
            <div className="hstack gap-2">
                <Button
                    color="primary"
                    size="sm"
                    className="d-sm-block d-md-none"
                    onClick={Handletoggle}
                >
                    {isOpen ? (
                        <i className="bi bi-x"></i>
                    ) : (
                        <i className="bi bi-three-dots-vertical"></i>
                    )}
                </Button>
            </div>

            <Collapse navbar isOpen={isOpen}>
                <Nav className="navbar-nav me-auto" navbar />
                <span className="d-flex justify-content-center">

                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle color="transparent">
                            <img
                                src=""
                                alt="profile"
                                className="rounded-circle"
                                width="30"
                            ></img>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Info</DropdownItem>
                            <DropdownItem>My Account</DropdownItem>
                            <DropdownItem>Edit Profile</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>My Balance</DropdownItem>
                            <DropdownItem>Inbox</DropdownItem>
                            <DropdownItem onClick={cerrarSesion}>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </span>
            </Collapse>
        </Navbar >
    );
}