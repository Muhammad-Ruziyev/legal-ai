"use client";
import {
  LogoIcon,
  HomeIcon,
  PenIcon,
  FolderIcon,
  AppsIcon,
  TrashIcon,
} from "@/utils/assets/icons";
import Dashboard from "@/components/Dashboard";
import ChatInput from "@/components/ChatInput";
import TeslaBot from "@/utils/assets/images/tesla_bot.png";
import ScreenSaver from "@/components/ScreenSaver";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full flex"
      style={{ background: "var(--Onyx, #232426)" }}
    >
      <ScreenSaver timeoutMs={10000} />
      <Dashboard />
      <div className="text-[#515151]"></div>
      <section className="flex-1 flex flex-col">
        <header className="hidden md:flex items-center justify-between px-4 py-3 border-b border-[#353A3E]">
          <div className="text-sm text-gray-300 bg-[#353A3E] py-[15px] px-5 rounded-[12px]">
            Чат с Legal AI • Новый чат
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-8 h-8 rounded-md flex items-center justify-center">
              <FolderIcon />
            </div>
            <div className="w-8 h-8 rounded-md flex items-center justify-center">
              <TrashIcon />
            </div>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="scale-110 text-white">
              <img
                src={TeslaBot.src}
                alt="Tesla Bot"
                className="w-[220px] h-[220px] rounded-[12px]"
              />
            </div>
            <p className="text-center font-sans text-[32px] font-medium leading-[150%] text-[#868686]">
              Начните чат с Legal AI
            </p>
          </div>
        </div>

        <div
          className="sticky bottom-0 w-full px-4 pb-6 pt-3"
          style={{ background: "var(--Onyx, #232426)" }}
        >
          <ChatInput />

          {/* mobile Navigation */}
          {/* <div className="md:hidden mt-3 flex justify-around text-[#868686]">
            <div className="p-3 rounded-[6px]" style={{ background: 'var(--Graphite, #353A3E)' }}><HomeIcon /></div>
            <div className="p-3 rounded-[6px]"><PenIcon /></div>
            <div className="p-3 rounded-[6px]"><FolderIcon /></div>
            <div className="p-3 rounded-[6px]"><AppsIcon /></div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
