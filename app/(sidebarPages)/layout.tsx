import React from "react";
import UserNavbar from "../components/navbar/Navbar";
import Sidebar from "../components/ui/Sidebar";

export default function SideBarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="App overflow-x-hidden">
        <UserNavbar />
        <section className="md:flex md:mt-[96px] mt-[72px] relative">
          <Sidebar />
          <div className="flex-1 lg:py-[24px] xl:px-[32px] lg:px-[24px] p-[16px] md:h-[calc(100dvh-96px)] h-[calc(100dvh-72px)] overflow-auto">
            {children}
          </div>
        </section>
      </main>
    </>
  );
}
