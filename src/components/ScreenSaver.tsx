"use client";
import { useEffect, useState } from "react";
import screenSaver from "@/utils/assets/images/screen_saver.gif";
import ChatInput from "./ChatInput";

export default function ScreenSaver({
  timeoutMs = 10000,
}: {
  timeoutMs?: number;
}) {
  const [active, setActive] = useState(false);
  const [render, setRender] = useState(false);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    let ft: ReturnType<typeof setTimeout> | null = null;
    const start = () => {
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        setRender(true);
        setActive(false);
        requestAnimationFrame(() => setActive(true));
      }, timeoutMs);
    };
    const reset = () => {
      setActive(false);
      if (ft) clearTimeout(ft);
      ft = setTimeout(() => setRender(false), 300);
      start();
    };
    start();
    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart",
      "scroll",
      "click",
    ];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    return () => {
      if (t) clearTimeout(t);
      if (ft) clearTimeout(ft);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, [timeoutMs]);

  if (!render) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black"
      style={{ opacity: active ? 1 : 0, transition: "opacity 600ms ease-out" }}
    >
      <div className="relative w-full h-full">
        <img
          src={screenSaver.src}
          alt="Screensaver"
          className="w-full h-[90vh] object-contain"
          style={{
            transform: active ? "scale(1)" : "scale(1.05)",
            transition: "transform 300ms ease-out",
          }}
        />
        <div className="pt-8 absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[720px] px-6">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
