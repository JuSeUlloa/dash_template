export const OPCIONES_MENU = [
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
    title: "Ruta Departamento",
    href: "/dash/departmentRoute",
    icon: "fa-solid  fa-route",
    children: [
      {
        title: "Adminstrar",
        href: "/dash/adminDepaRoute",
      },
      {
        title: "Listar",
        href: "/dash/listDepaRoute",
      },
    ]
  },
];