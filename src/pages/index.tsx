import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import TextInput from "@/components/form/TextInput";
import Layout from "@/components/layout/Layout";
import { CheckboxProps, TextInputProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaUserCircle
} from "react-icons/fa";
import AEDTLogo from "../../public/images/AEDT-logo.png";

const inputs: (TextInputProps | CheckboxProps)[] = [
  {
    name: "fullname",
    type: "text",
    required: true,
    placeholder: "Enter your name",
    label: "Full Name",
  },
  {
    name: "email",
    type: "email",
    required: true,
    placeholder: "Enter your email",
    label: "Email Address",
  },
  {
    name: "password",
    type: "password",
    required: true,
    placeholder: "Enter your password",
    label: "Password",
  },
  {
    name: "terms",
    type: "checkbox",
    required: true,
    label: (
      <>
        I accept the{" "}
        <a className="font-medium text-gray-400 hover:underline" href="#">
          Terms and Conditions
        </a>
      </>
    ),
    parent_div_className: "flex flex-row items-start",
    input_div_className: "mt-1",
    label_div_className: "ml-2",
    input_className:
      "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500",
    label_className: "text-lg font-medium	text-gray-500",
  },
];

export default function Home() {
  return (
    <Layout title={`Registration`}>
      <div className="flex flex-col content-center py-12 pr-10 pl-24">
        <div className="w-1/2 mb-4">
          <Image
            src={AEDTLogo}
            alt="AEDT Logo"
            className="object-cover w-full  h-full"
          />
        </div>
        <div className="text-2xl mb-2 font-bold text-gray-500 w-full">
          Free Sign Up
        </div>
        <div className="text-base mb-6 text-gray-500">
          Dont have an account? Create your account, it takes less than a
          minute.
        </div>
        <form className="space-y-7" action="#" method="post">
          {inputs.map((input) => {
            if (input.type !== "checkbox") {
              input.parent_div_className = "";
              input.label_className = "mb-2 text-lg font-medium	text-gray-500";
              input.input_className =
                "bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5";
              return TextInput(input);
            } else return Checkbox(input);
          })}
          <Button Icon={FaUserCircle} onClick={() => {}} label={`Sign Up`} />
        </form>
        <div className="grid grid-flow-row auto-rows-max items-center place-content-center mt-8">
          <div className="flex items-center place-content-center text-gray-500 text-lg">
            Sign up using
          </div>
          <div className="flex flex-row items-center place-content-center space-x-2 mt-4">
            <div className="border-solid border-2 border-blue-600 rounded-full p-2">
              <FaFacebook className="text-blue-600" />
            </div>
            <div className="border-solid border-2 border-red-600 rounded-full p-2">
              <FaGoogle className="text-red-600" />
            </div>
            <div className="border-solid border-2 border-sky-600 rounded-full p-2">
              <FaTwitter className="text-sky-600" />
            </div>
            <div className="border-solid border-2 border-zinc-600 rounded-full p-2">
              <FaGithub className="text-zinc-600" />
            </div>
          </div>
          <div className="mt-10">
            <span className="text-gray-400 text-sm mr-2">Already have an account?</span>
            <Link
              className="font-medium text-gray-400 hover:underline"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
