import { useState } from 'react'
import { FaPercent, FaHeart } from "react-icons/fa";
import { MdOutlineDashboard, MdPayments } from "react-icons/md";
import { LuPiggyBank } from "react-icons/lu";
import { BsShieldCheck, BsFillGearFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";

export const Menus = () => {
  const menuListUpper = [
    { menu: 'Dashboards', icon: <MdOutlineDashboard />, path: '' },
    { menu: 'Favourites', icon: <FaHeart />, path: '' },
    { menu: 'Payments', icon: <MdPayments />, path: '' },
    { menu: 'Deposits', icon: <FaPercent />, path: '' },
    { menu: 'Moneybox', icon: <LuPiggyBank />, path: '' },
    { menu: 'Securities', icon: <BsShieldCheck />, path: '' },
    { menuTwo: 'Help', iconTwo: <BiHelpCircle />, path: '' },
    { menuTwo: 'Settings', iconTwo: <BsFillGearFill />, path: '' },
  ]
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div>
      <section className="h-[90vh]">
        <div className="text-2xl font-bold border-b-[2px] border-b-[#242526] py-[26px] px-6">
          <h3>InvestBank</h3>
        </div>
        <ul className="mx-6 py-4  leading-[2.6em] border-b-[2px] border-b-[#242526]">
          {menuListUpper.map((list, index) => <li className={selectedIndex === index ? "flex items-center gap-2 cursor-pointer text-white" : "flex items-center gap-2 cursor-pointer text-gray-500"} key={index} onClick={() => setSelectedIndex(index)}>{list.icon}{list.menu}</li>)}
        </ul>
        <ul className="px-6 py-4 leading-[2.6em] text-gray-500">
          {menuListUpper.map((list, index) => <li className={selectedIndex === index ? "flex items-center gap-2 cursor-pointer text-white" : "flex items-center gap-2 cursor-pointer text-gray-500"} key={index} onClick={() => setSelectedIndex(index)}>{list.iconTwo}{list.menuTwo}</li>)}
        </ul>
      </section>
    </div>
  );
};
