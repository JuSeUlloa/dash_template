import { MenuLateral } from "./menu-lateral";
import { MenuSuperior } from "./menu-superior";

export const TableroPrincipal = () => {
    return (
        <main>
        {/********header**********/}
        <MenuSuperior />
        <div className="pageWrapper d-lg-flex">
            {/********Sidebar**********/}
            <aside className="sidebarArea shadow" id="sidebarArea">
                <MenuLateral />
            </aside>
            {/********Content Area**********/}
            <div className="contentArea">
                {/********Middle Content**********/}
                {/*   <Container className="p-4" fluid>
        <Outlet />
      </Container> */}
            </div>
        </div>
    </main>
    );
}