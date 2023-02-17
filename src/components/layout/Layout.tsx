import React from "react";
import Head from "next/head";
import Image from "next/image";
import LayoutBackground from "../../../public/images/bg-auth.jpg"

interface Props {
  children: React.ReactElement;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`p-4 lg:pt-24 lg:pb-6 lg:pl-24 lg:pr-6 min-h-screen bg-white grid grid-flow-col-dense lg:grid-cols-3 grid-cols-1`}
      >
        <div className="border-t border-r border-b border-gray-200 border-solid ">{children}</div>
        <div className="hidden lg:block lg:col-span-2">
          <Image
            src={LayoutBackground}
            alt="Layout Background"
            className="object-cover w-full  h-full"
          />
        </div>
      </main>
    </div>
  );
};

export default Layout;
