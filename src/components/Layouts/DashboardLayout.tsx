import { Header } from "./Header/Header";
import { SideBar } from "../Profile/SideBar";


export const DashboardLayout = ({ children}) => {
  return (
    <main className="flex">
      <div className="w-[18%] h-[100vh] bg-[#151718]">
        <SideBar/>
      </div>
      <section className="flex-1">
        <Header />
        <section className="bg-[#f9f9f9] px-16 py-10 mt-[4em]">{children}</section>
      </section>
    </main>
  );
};
