import { FaChevronDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

export const HeaderNotificationUser = () => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border rounded-full relative">
          <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-0 right-0"></div>
          <FiBell className="font-bold" />
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <div className="w-14 h-14 border overflow-hidden rounded-full">
          <img
            alt="user profile"
            src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=200"
            className="w-full h-full object-cover"
          />
        </div>
        <FaChevronDown className="text-gray-500" />
      </div>
    </div>
  );
};
