import { ReactNode } from "react";

type InputType = React.ComponentProps<"input"> & { icon?: ReactNode };

export const Input = ({ className, icon, ...props }: InputType) => {
  return (
    <div
      className={`border-[#ebebeb] rounded-lg border-2 ${className} p-1 py-0 flex items-center`}
    >
      {icon}
      <input {...props} className="p-2 w-full rounded-lg outline-none" />
    </div>
  );
};
