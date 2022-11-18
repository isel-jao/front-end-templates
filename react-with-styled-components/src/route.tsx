interface Route {
  path: string;
  name: string;
  icon: React.ReactNode;
  description?: string;
  color?: string;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M14.78 21.25H9.22V15.3C9.22 14.75 9.67 14.3 10.22 14.3H13.78C14.33 14.3 14.78 14.75 14.78 15.3V21.25V21.25Z" />
        <path d="M21.25 11.39V18.1C21.25 19.84 19.91 21.25 18.25 21.25H5.75C4.09 21.25 2.75 19.84 2.75 18.1V11.39C2.75 10.45 3.14 9.57 3.83 8.97L10.08 3.48C11.19 2.5 12.81 2.5 13.92 3.48L20.17 8.97C20.86 9.57 21.25 10.45 21.25 11.39Z" />
      </svg>
    ),
    description: "Home page",
    color: "#FF8C00",
  },
  {
    path: "/about",
    name: "About",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M12 11V15.66" />
        <path d="M12 9.08C12.4142 9.08 12.75 8.74422 12.75 8.33C12.75 7.91579 12.4142 7.58 12 7.58C11.5858 7.58 11.25 7.91579 11.25 8.33C11.25 8.74422 11.5858 9.08 12 9.08Z" />
        <path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" />
      </svg>
    ),
    description: "About page",
    color: "#F54888",
  },
];

export { type Route, routes };
