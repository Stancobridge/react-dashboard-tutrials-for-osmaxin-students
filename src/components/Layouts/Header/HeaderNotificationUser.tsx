import { FiBell } from "react-icons/fi";
import { Profile } from "./Profile";
import { FaChevronDown } from "react-icons/fa";

export const HeaderNotificationUser = () => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border rounded-full relative">
          <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-0 right-0"></div>
          <FiBell className="font-bold" />
        </div>
      </div>
      <Profile
        icon={<FaChevronDown />}
        className="flex items-center space-x-3"
      />
    </div>
  );
};
