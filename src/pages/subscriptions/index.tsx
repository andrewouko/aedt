import DashboardLayout from "@/components/layout/DashboardLayout";
import { Client, SubscriptionStatus } from "@/types";
import { Avatar, Chip } from "@mui/material";
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineMail, MdVerified } from "react-icons/md";

const clients: Client[] = [
  {
    name: "Louise Coleman",
    email: "louisemcoleman@dayrep.com",
    subscription_status: "active",
    subscription_type: "basic",
    courses_enrolled: 8,
    verified: true,
    image: "/images/users/avatar-1.jpg",
  },
  {
    name: "Robert Kent",
    email: "robertskent@jourrapide.com",
    subscription_status: "active",
    subscription_type: "silver",
    courses_enrolled: 12,
    verified: true,
    image: "/images/users/avatar-2.jpg",
  },
  {
    name: "Athur Childress",
    email: "athurrechildress@teleworm.us",
    subscription_status: "expired",
    subscription_type: "silver",
    courses_enrolled: 2,
    verified: false,
    image: "/images/users/avatar-3.jpg",
  },
  {
    name: "Ronald McGehee",
    email: "ronhee@jourrapide.com",
    subscription_status: "active",
    subscription_type: "silver",
    courses_enrolled: 17,
    verified: true,
    image: "/images/users/avatar-4.jpg",
  },
  {
    name: "Martin Jordan",
    email: "martindjordan@armyspy.com",
    subscription_status: "expired",
    subscription_type: "gold",
    courses_enrolled: 12,
    verified: true,
    image: "/images/users/avatar-5.jpg",
  },
  {
    name: "Dewayne Murphy",
    email: "dewaynhy@armyspy.com",
    subscription_status: "expired",
    subscription_type: "silver",
    courses_enrolled: 15,
    verified: false,
    image: "/images/users/avatar-6.jpg",
  },
  {
    name: "Russel Sanchez",
    email: "russelhsanchez@rhyta.com",
    subscription_status: "active",
    subscription_type: "silver",
    courses_enrolled: 4,
    verified: true,
    image: "/images/users/avatar-6.jpg",
  },
  {
    name: "Alvin Middleton",
    email: "alvinsmiddleton@armyspy.com",
    subscription_status: "expired",
    subscription_type: "basic",
    courses_enrolled: 2,
    verified: false,
    image: "/images/users/avatar-7.jpg",
  },
];

interface CardFooterIconProps {
  children: React.ReactNode;
}

export const CardFooterIcon: React.FC<CardFooterIconProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="bg-gray-200 text-gray-700 py-3 flex justify-center rounded-md hover:cursor-pointer hover:bg-indigo-200 hover:text-indigo-700">
      {children}
    </div>
  );
};

export default function Subscriptions() {
  const className = {
    expired: `bg-red-200 text-red-500`,
    active: `bg-green-200 text-green-500`,
  };
  return (
    <DashboardLayout
      title="Subscribed Clients"
      crumbs={["Subscriptions", "Client List"]}
    >
      <div className="grid grid-cols-4 gap-6 text-gray-500">
        {clients.map((client: Client) => (
          <div
            key={client.name}
            className="bg-white grid grid-flow-row auto-rows-max py-8 px-6 rounded-lg"
          >
            <div className="flex justify-center">
              <Avatar
                alt={client.name}
                src={client.image}
                sx={{ width: 70, height: 70 }}
              />
            </div>
            <div className="grid grid-flow-row auto-rows-max justify-center my-6 pb-6 border-b-2 border-gray-200">
              <div className="flex justify-center items-center space-x-1 mb-2">
                <div className="text-xl font-semibold">{client.name}</div>
                {client.verified && (
                  <MdVerified className="text-xl text-green-500" />
                )}
              </div>
              <div className="flex justify-center items-center space-x-1 text-gray-500">
                <MdOutlineMail className="text-xs" />
                <div className="text-sm">{client.email}</div>
              </div>
              <div className="flex justify-center items-center space-x-1 text-gray-500">
                <div className="text-base">{`Subscription Status : `}</div>
                <Chip
                  color="primary"
                  size="small"
                  label={
                    client.subscription_status.charAt(0).toUpperCase() +
                    client.subscription_status.slice(1)
                  }
                  className={`hover:cursor-pointer text-xs font-semibold ${
                    className[client.subscription_status]
                  }`}
                />
              </div>
              <div className="flex justify-center items-center space-x-1 text-gray-500">
                <div className="text-base font-semibold">{`Suscriptions Type: `}</div>
                <div className="text-base font-extrabold">
                  {client.subscription_type.charAt(0).toUpperCase() +
                    client.subscription_type.slice(1)}
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row auto-rows-max">
              <div className="flex justify-center text-base font-semibold">{`Courses Enrolled : ${client.courses_enrolled}`}</div>
              <div className="grid grid-cols-3 gap-10 mt-6 ">
                <CardFooterIcon>
                  <BsChatLeftDots className="text-lg" />
                </CardFooterIcon>
                <CardFooterIcon>
                  <MdOutlineMail className="text-xl" />
                </CardFooterIcon>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
