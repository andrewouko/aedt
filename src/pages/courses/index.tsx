import Button from "@/components/form/Button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Course } from "@/types";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const style = {
  position: "absolute" as "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const courses: Course[] = [
  {
    title: "Revolutionize how you build the web...",
    image: "/images/products/product-1.jpg",
    instructor: {
      image: "/images/users/avatar-1.jpg",
      name: "Paul J. Friend",
    },
    enrolled: 16000,
    create_date: new Date("2018/07/07"),
    curriculum: {
      url: "https://www.google.com",
      status: "blue",
    },
  },
  {
    title: "The modern javascript courses...",
    image: "/images/products/product-2.jpg",
    instructor: {
      image: "/images/users/avatar-2.jpg",
      name: "Bryan J. Luellen",
    },
    enrolled: 12300,
    create_date: new Date("2018/12/09"),
    curriculum: {
      url: "https://www.google.com",
      status: "green",
    },
  },
  {
    title: "A global guide to financial literacy and the effects...",
    image: "/images/products/product-3.jpg",
    instructor: {
      image: "/images/users/avatar-3.jpg",
      name: "Kathryn S. Collier",
    },
    enrolled: 567,
    create_date: new Date("2018/06/30"),
    curriculum: {
      url: "https://www.google.com",
      status: "red",
    },
  },
  {
    title: "Introduction to Management Control and Planning",
    image: "/images/products/product-4.jpg",
    instructor: {
      image: "/images/users/avatar-4.jpg",
      name: "Timothy Kauper",
    },
    enrolled: 2600,
    create_date: new Date("2018/08/09"),
    curriculum: {
      url: "https://www.google.com",
      status: "red",
    },
  },
  {
    title: "Finite Mathematics and Business Analytics",
    image: "/images/products/product-5.jpg",
    instructor: {
      image: "/images/users/avatar-5.jpg",
      name: "Zara Raws",
    },
    enrolled: 1734,
    create_date: new Date("2018/07/15"),
    curriculum: {
      url: "https://www.google.com",
      status: "green",
    },
  },
  {
    title: "Advanced Capital Budgeting",
    image: "/images/products/product-6.jpg",
    instructor: {
      image: "/images/users/avatar-6.jpg",
      name: "Annette P. Kelsch",
    },
    enrolled: 18,
    create_date: new Date("2018/06/09"),
    curriculum: {
      url: "https://www.google.com",
      status: "green",
    },
  },
];

export default function Courses() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <DashboardLayout title="Courses" crumbs={["Home", "Manage", "Courses"]}>
      <div className="bg-white p-6">
        <div>
          <Button
            type="button"
            onClick={() => handleOpen()}
            Icon={IoIosAddCircle}
            label="Add New Course"
            color="indigo"
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Course
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Form coming soon....
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className="mt-12">
          <table
            className="
    table-auto border-collapse min-w-full overflow-scroll"
          >
            <thead>
              <tr className="bg-transparent text-gray-500 font-bold">
                <td className="p-2">Courses</td>
                <td className="p-2">Instructor</td>
                <td className="p-2">Enrolled</td>
                <td className="p-2">Create Date</td>
                <td className="p-2">Curriculum</td>
                <td className="p-2">Action</td>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => {
                const className = {
                  blue: `bg-blue-200 text-blue-500`,
                  red: `bg-red-200 text-red-500`,
                  green: `bg-green-200 text-green-500`,
                };
                const td_className = `p-2 text-gray-500 text-sm`;
                const td_div_className =
                  "grid grid-flow-col auto-cols-max items-center space-x-2";
                const action_icon_className = "text-base";
                return (
                  <tr
                    key={course.title}
                    className="even:bg-white odd:bg-gray-100 border-t border-b border-slate-300"
                  >
                    <td className={`${td_className} font-bold`}>
                      <div className={td_div_className}>
                        <Image
                          src={course.image}
                          alt={course.title}
                          width={60}
                          height={40}
                        />
                        <div>{course.title}</div>
                      </div>
                    </td>
                    <td className={`${td_className} font-semibold`}>
                      <div className={td_div_className}>
                        <div>
                          <Avatar
                            alt={course.instructor.name}
                            src={course.instructor.image}
                            sx={{ width: 30, height: 30 }}
                          />
                        </div>
                        <div>{course.instructor.name}</div>
                      </div>
                    </td>
                    <td className={td_className}>{course.enrolled}</td>
                    <td className={td_className}>
                      {course.create_date.toLocaleDateString("en-GB")}
                    </td>
                    <td className={td_className}>
                      <Link href={course.curriculum.url}>
                        <Chip
                          color="primary"
                          size="small"
                          label={`View Curriculum`}
                          className={`hover:cursor-pointer text-xs font-semibold ${
                            className[course.curriculum.status]
                          }`}
                        />
                      </Link>
                    </td>
                    <td className={td_className}>
                      <div className={td_div_className}>
                        <IconButton aria-label="edit">
                          <FaEdit className={action_icon_className} />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <MdDelete className={action_icon_className} />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
