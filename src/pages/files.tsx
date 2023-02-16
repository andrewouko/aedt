import DashboardLayout from "@/components/layout/DashboardLayout";
import { FileIcon, formatFileSize } from "@/helpers";
import { FileType, Material } from "@/types";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Courses() {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles)
    setFiles(
      acceptedFiles.map((file: FileWithPath) => ({
        name: file.name,
        type: file.type as FileType,
        size: file.size,
        path: file.path ? file.path : "",
      }))
    );
  }, []);
  const [files, setFiles] = useState<Material[]>([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"], "application/zip": [".zip"] },
  });
  const text = !isDragActive
    ? "Drop files here or click to upload"
    : isDragAccept
    ? "All files will be accepted"
    : isDragReject
    ? "Some files will be rejected"
    : "Drop the files here ...";
  const text_className = isDragAccept
    ? "text-emerald-500"
    : isDragReject
    ? "text-red-500"
    : "";
  const warning_text = isDragReject
    ? "(Only accepts application/zip & application/pdf)"
    : !isDragAccept
    ? "(This is just a demo dropzone selected files are not actually uploaded.)"
    : "";
  const warning_text_className = isDragReject ? "text-red-500" : "";
  return (
    <DashboardLayout title="Curriculum" crumbs={["Home", "Upload", "Files"]}>
      <div className="bg-white p-6">
        <div
          {...getRootProps()}
          className="text-gray-500 grid grid-flow-row auto-rows-max gap-4 border-dashed border-2 py-10 border-gray-200 "
        >
          <input {...getInputProps()} />
          <div className="flex justify-center">
            <AiOutlineCloudUpload className="text-5xl" />
          </div>
          <div
            className={`flex justify-center text-2xl font-bold ${text_className}`}
          >
            {text}
          </div>
          <div
            className={`flex justify-center text-xs font-normal ${warning_text_className}`}
          >
            {warning_text}
          </div>
        </div>
        {files.map((file: Material) => (
          <div key={file.name} className="flex justify-between items-center border-2 border-solid border-gray-200 my-4 px-4">
            <div className="px-2 py-4 grid grid-flow-col auto-cols-max gap-6 text-gray-500 items-center">
              <div className="bg-gray-200 px-4 py-4 rounded-lg hover:cursor-pointer hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-200 focus:text-indigo-500">
                <Link
                  href={file.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {FileIcon(file.type)}
                </Link>
              </div>
              <div className="flex-col">
                <div className="text-base font-semibold overflow-hidden">
                  {file.name}
                </div>
                <div className="text-sm">
                  {formatFileSize(file.size, true, 1)}
                </div>
              </div>
            </div>
            <IoMdClose className="text-gray-500 text-lg hover:cursor-pointer" onClick={() => setFiles(files.filter((f: Material) => f.name !== file.name))}/>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
