import DashboardLayout from "@/components/layout/DashboardLayout";
import { FileType, Material } from "@/types";
import { FaFolder } from "react-icons/fa";
import { RiFolderZipFill } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";
import { MdPictureAsPdf } from "react-icons/md";
import Link from "next/link";

const files: Material[] = [
  {
    name: "Hyper-sketch.zip",
    type: "zip",
    size: 2411724.8,
    path: "/materials/assets.zip",
  },
  {
    name: "Complie Version",
    type: "folder",
    size: 91435827.2,
    path: "https://drive.google.com/drive/folders/1pDCnLX15WeOitAXLqB-eR5cCsaTDO3o9",
  },
  {
    name: "admin.zip",
    type: "zip",
    size: 47290777.6,
    path: "/materials/assets.zip",
  },
  {
    name: "Docs.pdf",
    type: "pdf",
    size: 7864320,
    path: "/materials/Intro-ODS.pdf",
  },
  {
    name: "License-details.pdf",
    type: "pdf",
    size: 802816,
    path: "/materials/Intro-ODS.pdf",
  },
  {
    name: "Purchase verification",
    type: "folder",
    size: 2306867.2,
    path: "https://drive.google.com/drive/folders/1pDCnLX15WeOitAXLqB-eR5cCsaTDO3o9",
  },
  {
    name: "Hyper Integrations",
    type: "zip",
    size: 916455424,
    path: "/materials/assets.zip",
  },
];

const formatFileSize = (bytes: number, si: boolean, dp: number): string => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
};

const FileIcon = (type: FileType): React.ReactNode => {
  const Icon = {
    zip: <RiFolderZipFill />,
    folder: <FaFolder />,
    pdf: <MdPictureAsPdf />,
  };
  return Icon[type];
};

export default function Materials() {
  return (
    <DashboardLayout
      title="Training Materials"
      crumbs={["Home", "Training Materials"]}
    >
      <div className="bg-white p-6">
        <div className="text-gray-500 font-semibold text-base mb-6">
          Quick Access
        </div>
        <div className="grid grid-cols-4 gap-4">
          {files.map((file, i) => (
            <div
              key={i}
              className="px-2 py-4 grid grid-flow-col auto-cols-max gap-6 text-gray-500 border-2 border-gray-200 rounded-md items-center"
            >
              <div className="bg-gray-200 px-4 py-4 rounded-lg hover:cursor-pointer hover:bg-indigo-200 hover:text-indigo-500">
                <Link href={file.path} target="_blank" rel="noopener noreferrer">{FileIcon(file.type)}</Link>
              </div>
              <div className="flex-col">
                <div className="text-base font-semibold">{file.name}</div>
                <div className="text-sm">
                  {formatFileSize(file.size, true, 1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
