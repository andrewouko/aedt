import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import TextInput from "@/components/form/TextInput";
import Layout from "@/components/layout/Layout";
import Socials from "@/components/Socials";
import { CheckboxProps, TextInputProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
import {
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaTwitter
} from "react-icons/fa";
import AEDTLogo from "../../public/images/AEDT-logo.png";

const inputs: (TextInputProps | CheckboxProps)[] = [
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
    name: "remember",
    type: "checkbox",
    required: true,
    label: (<span>Remember me</span>
    ),
    parent_div_className: "flex flex-row items-start",
    input_div_className: "mt-1",
    label_div_className: "ml-2",
    input_className:
      "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500",
    label_className: "text-lg font-medium text-gray-500",
  },
];

export default function Login() {
  return (
    <Layout title={`Login`}>
      <div className="flex flex-col content-center py-12 pr-10 pl-24">
        <div className="w-1/2 mb-20">
          <Image
            src={AEDTLogo}
            alt="AEDT Logo"
            className="object-cover w-full  h-full"
          />
        </div>
        <div className="text-2xl mb-2 font-bold text-gray-500 w-full">
          Sign In
        </div>
        <div className="text-base mb-6 text-gray-500">
          Enter your email address and password to access account.
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
          <Button Icon={BiLogIn} onClick={() => {}} label={`Log In`} type="submit" color="indigo" />
        </form>
        <div className="grid grid-flow-row auto-rows-max items-center place-content-center mt-8">
          <div className="flex items-center place-content-center text-gray-500 text-lg mb-4">
            Sign in with
          </div>
          <Socials />
          <div className="mt-24">
            <span className="text-gray-400 text-sm mr-2">{`Don't have an account?`}</span>
            <Link
              className="font-medium text-gray-400 hover:underline"
              href="/"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
