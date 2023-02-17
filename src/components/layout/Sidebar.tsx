import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { CheckboxProps, Route, TextInputProps } from "@/types";
import TextInput from "@/components/form/TextInput";
import Checkbox from "@/components/form/Checkbox";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaRegUserCircle,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Button from "@/components/form/Button";
import Link from "next/link";
import AEDTLogo from "../../../public/images/AEDT-logo.png";
import PlaceHolderLogo from "../../../public/images/logo.png";
import { BiHomeAlt, BiCabinet } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import {
  RiMoneyDollarBoxLine,
  RiMoneyEuroBoxFill,
  RiNotification3Line,
} from "react-icons/ri";
import { useRouter } from "next/router";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { Badge, Chip } from "@mui/material";
import { useState } from "react";
import { AiFillContainer, AiOutlineFolderAdd } from "react-icons/ai";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const NewBadge = (color: "white" | "red") =>
  color === "white" ? (
    <Chip
      color="primary"
      size="small"
      label={`New`}
      className={`bg-white text-gray-700 text-xs`}
    />
  ) : (
    <Chip color="error" size="small" label={`New`} />
  );

const routes: Route[] = [
  {
    path: "/analytics",
    label: "Dashboard",
    Icon: BiHomeAlt,
  },
  {
    path: "/courses",
    label: "Courses",
    Icon: BiCabinet,
    sub_route: [
      {
        path: "/courses",
        label: "All courses",
        badge: NewBadge("white"),
      },
      {
        path: "/courses/curriculum",
        label: "Curriculum",
      },
    ],
  },
  {
    path: "/user",
    label: "User Management",
    Icon: FaRegUserCircle,
  },
  {
    path: "/subscriptions",
    label: "Subscriptions",
    Icon: BsShieldCheck,
    badge: NewBadge("red"),
    sub_route: [
      {
        path: "/subscriptions",
        label: "All Subscriptions",
      },
      {
        path: "/subscriptions/manage",
        label: "Manage Subscriptions",
      },
    ],
  },
  {
    path: "/payments",
    label: "Payments",
    Icon: RiMoneyDollarBoxLine,
  },
];

const app_routes: Route[] = [
  {
    path: "/notifications",
    label: "Notifications",
    Icon: RiNotification3Line,
    badge: <Badge color="success" badgeContent={5}></Badge>,
  },
  {
    path: "/training/materials",
    label: "Training and Coaching",
    Icon: AiFillContainer,
    sub_route: [
      {
        path: "/training/session",
        label: "Join or Create Session",
      },
      {
        path: "/training/materials",
        label: "Training Materials",
        badge: NewBadge("white"),
      },
    ],
  },
  {
    path: "/files",
    label: "File Manager",
    Icon: AiOutlineFolderAdd,
  },
  {
    path: "/support",
    label: "Customer Support",
    Icon: HiOutlineChatAlt2,
  },
];

interface isOpenType {
  path: string;
  open: boolean;
}

interface NavItem extends Route {
  isOpen: isOpenType;
  setOpen: ({ path, open }: isOpenType) => void;
  pathname: string;
}

const NavItem = ({
  path,
  label,
  Icon,
  sub_route,
  badge,
  isOpen,
  setOpen,
  pathname,
}: NavItem) => {
  const isActive = pathname === path;
  const getLinkClass = (isActive: boolean) =>
    isActive
      ? "text-gray-100"
      : "text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100";
  const Caret =
    isOpen.open && isOpen.path === path ? RxCaretDown : RxCaretRight;
  return (
    <div key={path}>
      <div
        className={`${getLinkClass(
          isActive
        )} flex items-center px-6 py-2 mt-4 duration-200`}
      >
        <div className="w-full flex justify-between items-center">
          <Link href={path} className="flex items-center space-x-2">
            {Icon && <Icon />}
            <span className="">{label}</span>
          </Link>
          {sub_route && (
            <Caret
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="hover:cursor-pointer"
              onClick={() => setOpen({ path, open: !isOpen.open })}
            />
          )}
          {badge}
        </div>
      </div>
      {sub_route &&
        ((isOpen.open && isOpen.path === path) ||
          sub_route.findIndex((route) => route.path === pathname) > -1) && (
          <div className="grid grid-cols-1 place-items-end w-full">
            <div id="dropdown" className="bg-transparent w-3/4">
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {sub_route.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className={`flex items-center space-x-2 px-4 py-2 justify-between ${getLinkClass(
                        route.path === pathname
                      )}`}
                    >
                      <div>{`${route.label}`}</div>
                      <div>{route.badge}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
    </div>
  );
};

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState<isOpenType>({
    path: "",
    open: false,
  });
  return (
    <>
      <div className="hidden lg:flex">
        <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-800 lg:translate-x-0 lg:static lg:inset-0">
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <Image
                src={PlaceHolderLogo}
                alt="AEDT Logo"
                className="object-cover w-full h-full px-10"
              />
            </div>
          </div>
          <nav className="mt-10">
            <div className="ml-6 text-gray-500 text-xs font-bold">
              NAVIGATION
            </div>
            <div className="border-solid border-b-2 border-gray-700 pb-6">
              {routes.map((route) => {
                const item = {
                  ...route,
                  isOpen,
                  setOpen,
                  pathname: router.pathname,
                };
                return NavItem(item);
              })}
            </div>
            <div className="ml-6 text-gray-500 text-xs font-bold mt-6">
              APPS
            </div>
            <div className="pb-6">
              {app_routes.map((route) => {
                const item = {
                  ...route,
                  isOpen,
                  setOpen,
                  pathname: router.pathname,
                };
                return NavItem(item);
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
