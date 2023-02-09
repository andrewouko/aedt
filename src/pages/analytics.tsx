import Layout from "@/components/layout/Layout";
import AEDTLogo from "../../public/images/AEDT-logo.png";
import Image from "next/image";
import { AnalyticsItem, CheckboxProps, TextInputProps } from "@/types";
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
import DashboardLayout from "@/components/layout/DashboardLayout";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import ContentTitle from "@/components/layout/ContentTitle";

const analytics: AnalyticsItem[] = [
  {
    label: "Subscribers",
    count: 9184,
    percentage_change: 3.27,
    change_type: "increase",
  },
  {
    label: "Active Subscriptions",
    count: 3254,
    percentage_change: 5.38,
    change_type: "decrease",
  },
  {
    label: "Courses",
    count: 861,
    percentage_change: 4.87,
    change_type: "increase",
  },
  {
    label: "Revenue",
    count: 253000,
    percentage_change: 11.7,
    change_type: "increase",
    formatCountAsCurrency: true,
  },
];

const ChangeIcon = (change: 'increase' | 'decrease') => {
  const className = "text-lg"
  if(change === 'increase') return <GoArrowUp className={className} />
  return <GoArrowDown className={className} />
}

export default function Analytics() {
  return (
    <DashboardLayout>
      <ContentTitle title="Analytics" crumbs={['Analytics', 'Data']} />
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-10 w-full">
          {analytics.map((analysis) => (
            <div
              key={analysis.label}
              className="grid grid-rows-3 items-center pl-7 py-3 bg-white rounded-md shadow-sm space-y-3"
            >
              <div className="text-base text-gray-500 font-normal">
                {analysis.label}
              </div>
              <div className="text-2xl text-gray-500 font-medium">
                {analysis.formatCountAsCurrency
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                      notation: 'compact'
                    }).format(analysis.count)
                  : new Intl.NumberFormat("en-US").format(analysis.count)}
              </div>
              <div className={` flex space-x-1 ${analysis.change_type === "increase" ? 'text-green-600' : 'text-red-600'}`}>
                {ChangeIcon(analysis.change_type)}
                <div className="text-sm font-normal">
                  {new Intl.NumberFormat("en-EN", {
                    style: "percent",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(analysis.percentage_change / 100)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
