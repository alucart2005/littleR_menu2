import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const Data = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Reports",
    path: "/reports",
    cName: "nav-text",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
  },
  {
    title: "Products",
    path: "/products",
    cName: "nav-text",
    icon: <IoIcons.IoIosPaper />,
  },
];
