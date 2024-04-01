const SidebarItems = [
  {
    name: "Dashboard",
    icon: "fas fa-tasks",
    link: "/",
    key: "dashboard",
  },
  {
    name: "Settings",
    icon: "fas fa-cog",
    link: "/settings",
    key: "settings",
  },
];

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 w-full h-16 px-2 text-center bg-gray-800 md:w-1/5 md:bg-gray-800 md:pt-8 md:top-0 md:left-0 md:h-full md:border-r-4 md:border-gray-600">
      <div className="mx-auto md:relative lg:float-right lg:px-6">
        <ul className="flex flex-row text-center list-reset md:flex-col md:text-left">
          {SidebarItems.map((item) => (
            <li key={item.key} className="flex-1 mr-3">
              <a
                href={item.link}
                className="block py-1 pl-1 text-white no-underline align-middle border-b-2 border-gray-800 md:py-3 hover:text-white hover:border-purple-500"
              >
                <i className={`${item.icon} pr-0 md:pr-3`}></i>
                <span className="block pb-1 text-xs text-gray-400 md:pb-0 md:text-base md:text-gray-200 md:inline-block">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
          {/* <li className="flex-1 mr-3">
            <a
              href="/"
              className="block py-1 pl-1 text-white no-underline align-middle border-b-2 border-gray-800 md:py-3 hover:text-white hover:border-purple-500"
            >
              <i className="pr-0 fas fa-tasks md:pr-3"></i>
              <span className="block pb-1 text-xs text-gray-400 md:pb-0 md:text-base md:text-gray-200 md:inline-block">
                Dashboard
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
