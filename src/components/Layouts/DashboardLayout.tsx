import { ReactNode } from "react";
import { Header } from "./Header";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <div className="w-[18%] bg-[#151718]">Sidebar</div>
      <section className="flex-1">
        <Header />
        <section className="bg-[#f9f9f9] px-16 py-10 ">{children}</section>
      </section>
    </main>
  );
};
