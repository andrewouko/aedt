import Layout from "@/components/layout/Layout";
import AEDTLogo from "../../public/images/AEDT-logo.png";
import Image from "next/image";
import { CheckboxProps, DashboardProps, TextInputProps } from "@/types";
import TextInput from "@/components/form/TextInput";
import Checkbox from "@/components/form/Checkbox";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Button from "@/components/form/Button";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ContentTitle from "./ContentTitle";
import Head from "next/head";
import { useState } from "react";

export default function DashboardLayout({ children, title, crumbs }: DashboardProps) {
  const [hidden, setHidden] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-gray-200 font-roboto">
        <Sidebar hidden={hidden} setHidden={setHidden} />
        <div className="flex-1 flex flex-col">
          <Header hidden={hidden} setHidden={setHidden} />
          <div className="flex-1  bg-gray-200">
            <div className="w-full px-5 py-8">
              <ContentTitle
                title={title}
                crumbs={crumbs}
              />
              <div className="mt-4">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
