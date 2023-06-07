import { Input } from "../../Forms";
import { HeaderNotificationUser } from "./HeaderNotificationUser";
import { HeaderSearch } from "./HeaderSearch";

export const Header = () => {
  return (
    <div className="px-16 py-5 flex items-center justify-between shadow-md border-b">
      <div>
        <Input
          icon={<HeaderSearch />}
          className="w-[350px]"
          placeholder="Search..."
        />
      </div>
      <HeaderNotificationUser />
    </div>
  );
};
