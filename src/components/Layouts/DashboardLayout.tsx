import { ReactNode } from "react";
import { Header } from "./Header";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <div className="w-[18%] bg-[#151718]">Sidebar</div>
      <section className="flex-1">
        <Header />
        <section>{children}</section>
      </section>
    </main>
  );
};
