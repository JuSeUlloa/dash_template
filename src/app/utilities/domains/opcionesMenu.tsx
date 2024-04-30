export const  OPCIONES_MENU = [
    {
      title: "Inicio",
      href: "/dash/",
      icon: "fa fa-home",
    },
    {
      title: "Departamentos",
      href: "/dash/departments",
      icon: "fa fa-map",
      children: [
        {
          title: "Adminstrar",
          href: "/dash/adminDepartment",
        },
        {
          title: "Listar",
          href: "/dash/listDepartment",
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