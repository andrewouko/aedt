import Layout from "@/components/layout/Layout";
import AEDTLogo from "../../public/images/AEDT-logo.png";
import Image from "next/image";
import { CheckboxProps, Language, TextInputProps } from "@/types";
import TextInput from "@/components/form/TextInput";
import Checkbox from "@/components/form/Checkbox";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaUserCircle,
  FaCaretDown,
  FaRegMoon,
} from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Button from "@/components/form/Button";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { RxTextAlignJustify } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { ES, FR, US } from "country-flag-icons/react/3x2";
import { useState } from "react";
import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { TbCircles } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { IoMdContract } from "react-icons/io";
const langs: Language[] = [
  {
    Icon: US,
    label: "English",
  },
  {
    Icon: FR,
    label: "French",
  },
  {
    Icon: ES,
    label: "Spanish",
  },
];

export default function Header() {
  const [lang, setLang] = useState<Language | undefined>(
    langs.find((lang) => lang.label === "English")
  );
  const [langOpen, setLangOpen] = useState<boolean>(false);
  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 bg-white">
        <div className="flex items-center">
          <RxTextAlignJustify size={`2rem`} />

          <div className="relative ml-2">
            <form method="post" action="#">
              <div className="flex flex-row ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <AiOutlineSearch />
                </div>
                <input
                  type="search"
                  id="search"
                  className="w-full pl-10 text-sm text-gray-500 bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-indigo-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex justify-center">
            <div>
              <div className="dropdown relative">
                <button
                  className="dropdown-toggle px-3 py-2.5 bg-whitetext-white font-medium text-xs leading-tight hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center whitespace-nowrap text-gray-500"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => {
                    setLangOpen(true);
                  }}
                >
                  {lang && <lang.Icon className="w-5 h-5 mr-2" />}
                  <span className="text-gray-500">{lang?.label}</span>
                  <FaCaretDown className="w-2 ml-2" />
                </button>
                <ul
                  className={`dropdown-menu w-full absolute bg-white text-base z-50 float-right py-2 list-none text-left rounded-lg shadow-lg m-0 bg-clip-padding border-none ${
                    langOpen === false ? "hidden" : ""
                  }`}
                  aria-labelledby="dropdownMenuButton1"
                >
                  {langs
                    .filter((l) => l.label !== lang?.label)
                    .map((lang) => (
                      <li key={lang.label}>
                        <button
                          className="dropdown-item font-normal text-sm py-2 px-4 w-full bg-transparent text-gray-700 hover:bg-gray-100 flex flex-row "
                          onClick={() => {
                            setLang(lang);
                            setLangOpen(false);
                          }}
                        >
                          <lang.Icon className="w-5 h-5 mr-2" />
                          <span className="text-gray-500">{lang.label}</span>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <button className="flex mx-4 text-gray-600 focus:outline-none relative">
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 flex justify-center items-center items text-white">
              <span>1</span>
            </span>
            <MdNotificationsNone className="w-7 h-7" />
          </button>
          <TbCircles className="w-5 h-5" />
          <BsGear className="w-5 h-5" />
          <FaRegMoon className="w-5 h-5" />
          <IoMdContract className="w-5 h-5" />
          <div className="relative flex items-center">
            <button
              //   @click="dropdownOpen = !dropdownOpen"
              className="relative z-10 block w-10 h-10 overflow-hidden rounded-full shadow focus:outline-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                alt="Profile Image"
                fill
              />
            </button>
            <div className="grid grid-flow-row auto-rows-max place-content-stretch ml-2">
              <div className="text-sm text-gray-500 font-medium">
                Dominic Keller
              </div>
              <div className="text-xs text-gray-500 font-light">
                Super Admin
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
