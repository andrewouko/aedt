import { ContentTitleProps } from "@/types";
import { RxCaretRight } from "react-icons/rx";

export default function ContentTitle({ title, crumbs }: ContentTitleProps) {
  return (
    <div className="flex justify-between">
      <div className="text-xl font-medium text-gray-500">{title}</div>
      <div className="grid grid-flow-col auto-cols-max text-base gap-2">
        {crumbs.map((crumb, index) => (
          <div key={index}>
            <div
              className={`grid grid-flow-col auto-cols-max items-center gap-2`}
            >
              <div
                className={`${
                  index !== crumbs.length - 1
                    ? "text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {crumb}
              </div>
              {index !== crumbs.length - 1 && <RxCaretRight />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
