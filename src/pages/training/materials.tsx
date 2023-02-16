import DashboardLayout from "@/components/layout/DashboardLayout";
import { FileIcon, formatFileSize } from "@/helpers";
import { Material } from "@/types";
import Link from "next/link";

const files: Material[] = [
  {
    name: "Hyper-sketch.zip",
    type: "application/zip",
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
    type: "application/zip",
    size: 47290777.6,
    path: "/materials/assets.zip",
  },
  {
    name: "Docs.pdf",
    type: "application/pdf",
    size: 7864320,
    path: "/materials/Intro-ODS.pdf",
  },
  {
    name: "License-details.pdf",
    type: "application/pdf",
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
    type: "application/zip",
    size: 916455424,
    path: "/materials/assets.zip",
  },
];

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
        <div className="grid lg:grid-cols-4 lg:gap-4 grid-cols-3 gap-3">
          {files.map((file, i) => (
            <div
              key={i}
              className="px-2 py-4 grid grid-flow-col auto-cols-max gap-6 text-gray-500 border-2 border-gray-200 rounded-md items-center"
            >
              <div className="bg-gray-200 px-4 py-4 rounded-lg hover:cursor-pointer hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-200 focus:text-indigo-500">
                <Link href={file.path} target="_blank" rel="noopener noreferrer">{FileIcon(file.type)}</Link>
              </div>
              <div className="flex-col">
                <div className="text-base font-semibold overflow-hidden">{file.name}</div>
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
