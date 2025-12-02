"use client";
import { useState } from "react";
import Notifications from "@/utils/assets/images/Notification.png";

import {
  HomeIcon,
  PenIcon,
  FolderIcon,
  AppsIcon,
  SettingsIcon,
  CoinIcon,
  HandshakeIcon,
  LogoIcon,
  AttachIcon,
  CopyIcon,
} from "@/utils/assets/icons";

export default function Dashboard() {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      className={`hidden md:flex bg-[#131313] text-[#868686] overflow-hidden transition-all duration-300 ease-out ${
        expanded ? "w-[420px]" : "w-20"
      }`}
    >
      <div className="flex w-full">
        <div className="w-20 flex flex-col items-center justify-center gap-3 py-4">
          <div
            className="mb-12 p-3 rounded-[16px]"
            style={{
              background:
                "linear-gradient(224deg, #343434 -0.45%, #222121 100.47%)",
            }}
          >
            <LogoIcon />
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className={`p-3 mt-4 rounded-[6px] transition-colors duration-200 ${
              expanded ? "bg-[#353A3E] text-gray-200" : "hover:bg-[#353A3E]"
            }`}
            aria-label="Развернуть дашборд"
          >
            <HomeIcon />
          </button>
          <div className="p-3 mt-4 rounded-[6px] hover:bg-[#353A3E] transition">
            <PenIcon />
          </div>
          <div className="p-3 mt-4 rounded-[6px] hover:bg-[#353A3E] transition">
            <FolderIcon />
          </div>
          <div className="p-3 mt-4 rounded-[6px] hover:bg-[#353A3E] transition">
            <AppsIcon />
          </div>
          <div className="p-3 mt-4 rounded-[6px] hover:bg-[#353A3E] transition">
            <CoinIcon />
          </div>
          <div className="p-3 mt-4 rounded-[6px] hover:bg-[#353A3E] transition">
            <HandshakeIcon />
          </div>
          <div className="mt-auto p-3 mb-4 rounded-[6px] hover:bg-[#353A3E] transition">
            <SettingsIcon />
          </div>
        </div>

        {expanded && (
          <div className="flex-1 px-3 py-4 border-r border-[#232426] h-full">
            <div className="max-w-[360px] mx-auto w-full space-y-6 flex flex-col h-full">
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-[12px] bg-[#353A3E] text-gray-200 text-sm">
                  Новый чат +
                </button>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-[12px] bg-[#353A3E] text-gray-300 flex items-center justify-center text-base">
                    ⇅
                  </button>
                  <button className="w-10 h-10 rounded-[12px] bg-[#353A3E] text-gray-300 flex items-center justify-center text-base">
                    ◫
                  </button>
                </div>
              </div>

              <div className="rounded-[12px] overflow-hidden border border-[#353A3E]">
                <img
                  src={Notifications.src}
                  alt="Последний инструмент"
                  className="w-full h-28 object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="text-gray-300">Последний исп. инструмент</div>
                <div className="flex items-center gap-2 text-[#868686]">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-[8px] bg-[#232426] border border-[#353A3E]">
                    Генерация документов
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between">
                  <div className="text-gray-300">История сообщений</div>
                  <div className="text-[#868686] text-sm">32 Чата</div>
                </div>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center gap-3 rounded-[12px] bg-[#2A2B2D] px-3 py-3">
                    <div className="w-12 h-12 shrink-0 rounded-[12px] bg-[#353A3E] text-[#BFBFBF] flex flex-col items-center justify-center leading-tight">
                      <div className="text-xs">12</div>
                      <div className="text-[10px]">Июн</div>
                    </div>
                    <div className="flex-1 text-gray-200">Статья АК 47</div>
                    <button className="w-7 h-7 rounded-[8px] bg-[#353A3E] text-[#BFBFBF]">
                      ···
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 shrink-0 rounded-[12px] bg-[#353A3E] text-[#BFBFBF] flex flex-col items-center justify-center leading-tight">
                      <div className="text-xs">12</div>
                      <div className="text-[10px]">Апр</div>
                    </div>
                    <div className="text-gray-300">
                      В каких случаях убийство может быть оправдано с точки
                      зрения?
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 shrink-0 rounded-[12px] bg-[#353A3E] text-[#BFBFBF] flex flex-col items-center justify-center leading-tight">
                      <div className="text-xs">12</div>
                      <div className="text-[10px]">Апр</div>
                    </div>
                    <div className="text-gray-300">Статья 1 УК РФ</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 shrink-0 rounded-[12px] bg-[#353A3E] text-[#BFBFBF] flex flex-col items-center justify-center leading-tight">
                      <div className="text-xs">12</div>
                      <div className="text-[10px]">Апр</div>
                    </div>
                    <div className="text-gray-300">Как создать документ</div>
                  </div>
                </div>
              </div>
              <div className="pt-2 mt-auto">
                <div className="relative mt-auto w-full flex items-center gap-2 p-3 rounded-[12px] border border-[#353A3E] bg-[#232426]">
                  <input
                    type="text"
                    placeholder="Вставьте ссылку или начните поиск"
                    className="flex-1 bg-transparent outline-none text-gray-100 placeholder:text-gray-500"
                  />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-[#353A3E] bg-[#232426] flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5">
                      <CopyIcon />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#353A3E] bg-[#232426] flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5">
                      <AttachIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
