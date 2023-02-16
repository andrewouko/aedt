import { FaFolder } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { RiFolderZipFill } from "react-icons/ri";
import { FileType } from "./types";

export const formatFileSize = (
  bytes: number,
  si: boolean,
  dp: number
): string => {
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

export const FileIcon = (type: FileType, className?: string): React.ReactNode => {
  const Icon = {
    'application/pdf': <RiFolderZipFill className={className} />,
    folder: <FaFolder className={className} />,
    'application/zip': <MdPictureAsPdf className={className} />,
  };
  return Icon[type];
};
