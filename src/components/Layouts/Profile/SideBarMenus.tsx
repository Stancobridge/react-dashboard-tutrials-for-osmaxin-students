import { ReactNode } from "react";

type MenuType = React.ComponentProps<"div"> &  { icon?: ReactNode } & { page?: string };

export const SideBarMenus = ({ className, icon, page , ...props }: MenuType) =>{
    return (
        <div className={`px-3 flex items-center space-x-4 cursor-pointer + ${className}`}>
            {icon}
            <h2>{ page}</h2>
        </div>
    )
}

