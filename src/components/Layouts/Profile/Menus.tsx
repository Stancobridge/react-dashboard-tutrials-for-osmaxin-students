import { SideBarMenus } from "./SideBarMenus";
import { FaPercent } from "react-icons/fa";
import { MdOutlineDashboard, MdPayments } from 'react-icons/md';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { LuPiggyBank } from 'react-icons/lu'
import { BsShieldCheck, BsFillGearFill } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';


export const Menus = () => {
    return (
        <div>
            <section className="h-[90vh]">
                <div className="text-2xl font-bold border-b-[2px] border-b-[#242526] py-[26px] px-6">
                    <SideBarMenus
                        page="InvestBank"
                    />
                </div>
                <div className="mx-6 py-4  leading-[2.6em] border-b-[2px] border-b-[#242526] text-gray-500">
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
                <div className="px-6 py-4 leading-[2.6em] text-gray-500">
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
        </div>
    )
}