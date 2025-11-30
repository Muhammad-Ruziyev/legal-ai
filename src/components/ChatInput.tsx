import { CopyIcon, AttachIcon, SendMessageIcon } from "@/utils/assets/icons";

export default function ChatInput() {
  return (
    <div className="w-full">
      <div className="relative w-full flex items-center gap-3 p-3 rounded-[24px] border border-[#353A3E] bg-[#232426] shadow-[0_4px_100px_0_rgba(0,0,0,0.45)]">
        <textarea
          rows={1}
          placeholder="Начните писать"
          className="p-2.5 pt-2.5 pb-10 flex-1 resize-none bg-transparent outline-none text-gray-100 placeholder:text-gray-500 min-h-[44px] max-h-[200px]"
        />
        <div className="absolute left-3 bottom-3 flex items-center gap-2">
          <div className="p-2 w-8 h-8 rounded-full border border-[#353A3E] bg-[#232426] flex items-center justify-center [&_svg]:w-8 [&_svg]:h-8">
            <CopyIcon />
          </div>
          <div className="p-2 w-8 h-8 rounded-full border border-[#353A3E] bg-[#232426] flex items-center justify-center [&_svg]:w-8 [&_svg]:h-8">
            <AttachIcon />
          </div>
        </div>

        <button className="shrink-0 w-9 h-9 rounded-full transition flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5">
          <SendMessageIcon />
        </button>
      </div>
    </div>
  );
}
