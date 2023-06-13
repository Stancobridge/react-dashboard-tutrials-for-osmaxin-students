import { Profile } from "../Layouts";
import { Menus } from "./Menus";
import { FaChevronDown } from "react-icons/fa";

export const SideBar = () => {
  return (
    <section className="text-white w-[18%] fixed bg-[#151718]">
      <Menus/>
      <section className="relative bottom-10 ">
        <Profile
          name="Ann Karin"
          icon={<FaChevronDown className="ml-4" />}
          email="ann.karin@gmail.com"
          className="border-t-[2px] border-t-[#242526] py-8 space-x-3 flex justify-center"
        />
      </section>
    </section>
  );
};
