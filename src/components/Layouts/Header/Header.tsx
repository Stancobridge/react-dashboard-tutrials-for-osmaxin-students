import { Input } from "../../Forms/Input/Input";
import { HeaderNotificationUser } from "./HeaderNotificationUser";
import { HeaderSearch } from "./HeaderSearch";

export const Header = () => {
  return (
    <div className="px-16 py-5 flex items-center fixed w-[82%] right-0 z-10 bg-white justify-between shadow-md border-b">
      <div className="border-2 rounded-lg">
        <Input
          icon={<HeaderSearch />}
          className="w-[350px] border-none"
          placeholder="Search..."
        />
      </div>
      <HeaderNotificationUser />
    </div>
  );
};
