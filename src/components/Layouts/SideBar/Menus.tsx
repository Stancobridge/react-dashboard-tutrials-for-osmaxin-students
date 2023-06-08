import { SideBarMenus } from "./SideBarMenus";
import { FaPercent } from "react-icons/fa";
import { MdOutlineDashboard, MdPayments } from 'react-icons/md';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { LuPiggyBank } from 'react-icons/lu'
import { BsShieldCheck, BsFillGearFill } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { Profile } from "../Header/Profile"
import { FaChevronDown } from "react-icons/fa";


export const Menus = () => {
    return (
        <div>
            <section className="h-[90vh]">
                <div className="text-2xl font-bold border-b-[2px] border-b-[#242526] py-[26px] px-6">
                    <SideBarMenus
                        page="InvestBank"
                    />
                </div>
                <div className="m-6  leading-[3em] border-b-[2px] border-b-[#242526] text-gray-500">
                    <SideBarMenus
                        icon={<MdOutlineDashboard />}
                        page="Dashboards"
                        className="text-white"
                    />
                    <SideBarMenus
                        icon={<TbBrandGoogleAnalytics />}
                        page="Analitycs"
                    />
                    <SideBarMenus
                        icon={<MdPayments />}
                        page="Payments"
                    />
                    <SideBarMenus
                        icon={<FaPercent />}
                        page="Deposits"
                    />
                    <SideBarMenus
                        icon={<LuPiggyBank />}
                        page="Moneybox"
                    />
                    <SideBarMenus
                        icon={<BsShieldCheck />}
                        page="Securities"
                    />
                </div>
                <div className="px-6 leading-[3em] text-gray-500">
                    <SideBarMenus
                        icon={<BiHelpCircle />}
                        page="Help"
                    />
                    <SideBarMenus
                        icon={<BsFillGearFill />}
                        page="Settings"
                    />
                </div>
            </section>
            <section className="h-auto">
                <Profile
                    name="Ann Karin"
                    icon={<FaChevronDown  className="ml-4"/>}
                    email="ann.karin@gmail.com"
                    className="border-t-[2px] border-t-[#242526] p-6 space-x-3"
                />
            </section>
        </div>
    )
}