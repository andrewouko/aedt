import { FlagComponent } from "country-flag-icons/react/3x2";
import { CountryCode } from "libphonenumber-js";
import React from "react";

type InputProps = {
  name: string;
  label_className?: string;
  required: boolean;
  input_className?: string;
};

export interface TextInputProps extends InputProps {
  type: "email" | "password" | "text";
  parent_div_className?: string;
  placeholder?: string;
  label: string;
}

export interface CheckboxProps extends InputProps {
  type: "checkbox";
  parent_div_className: string;
  input_div_className: string;
  label_div_className: string;
  label: React.ReactNode;
}

export interface ButtonProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  type: "button" | "submit";
  color: "indigo" | "yellow" | "pink";
}

export interface Route {
  path: string;
  label: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  sub_route?: Route[];
  badge?: React.ReactNode;
}

export interface DashboardProps {
  children: React.ReactNode;
  title: string;
  crumbs: Array<string>;
}

export interface Language {
  Icon: FlagComponent;
  label: string;
}

export interface Course {
  title: string;
  image: string;
  instructor: {
    name: string;
    image: string;
  };
  enrolled: number;
  create_date: Date;
  curriculum: {
    url: string;
    status: "blue" | "green" | "red";
  };
}

export interface AnalyticsItem {
  label: string;
  count: number;
  percentage_change: number;
  change_type: "increase" | "decrease";
  formatCountAsCurrency?: boolean;
}

export interface ContentTitleProps {
  title: string;
  crumbs: string[];
}

export type FileType = "application/zip" | "folder" | "application/pdf";

export interface Material {
  name: string;
  type: FileType;
  size: number;
  path: string;
}

export interface Notification {
  star: boolean;
  from: string;
  subject: string;
  time: Date;
}

export type SubscriptionStatus = "active" | "expired";

export type SubscriptionType = "basic" | "silver" | "gold";

export interface Client {
  name: string;
  email: string;
  subscription_status: SubscriptionStatus;
  subscription_type: SubscriptionType;
  courses_enrolled: number;
  verified: boolean;
  image: string;
}

export interface Payment {
  ref: string;
  subscriber_name: string;
  phone: {
    number: string;
    country_code: CountryCode;
  };
  email: string;
  amount: number;
  date: Date;
  subscription_type: SubscriptionType;
}
