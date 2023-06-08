import { ReactNode } from "react";
import { Image } from "./Image";


type ImageType = React.ComponentProps<"img"> & { name?: string } & { icon?: ReactNode } & { email?: string };

export const Profile = ({ className, icon, name, email, ...props }: ImageType) => {
    return (
        <div className={`flex items-center space-x-3} + ${className}`}>
            <Image />
            <div className="flex flex-col">
                <div className="flex items-center text-[16px]">
                    <h1>{name}</h1>
                    {icon}
                </div>
                <div className="text-gray-500 text-[13px]">
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}