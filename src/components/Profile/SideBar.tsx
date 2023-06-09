import { Profile } from "../Layouts";
import { Menus } from "./Menus";
import { FaChevronDown } from "react-icons/fa";

export const SideBar = () => {
  return (
    <section className="text-white w-full h-[100vh] overflow-hidden">
      <Menus />
      <section className="relative bottom-7">
        <Profile
          name="Ann Karin"
          icon={<FaChevronDown className="ml-4" />}
          email="ann.karin@gmail.com"
          className="border-t-[2px] border-t-[#242526] p-6 space-x-3"
        />
      </section>
    </section>
  );
};
