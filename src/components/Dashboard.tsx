import { HomeIcon, PenIcon, FolderIcon, AppsIcon, SettingsIcon ,CoinIcon , HandshakeIcon , LogoIcon } from "@/utils/assets/icons";

export default function Dashboard() {
  return (
    <aside className="hidden w-20 bg-[#131313] md:flex flex-col items-center gap-3 py-4 border-r border-neutral-700 text-[#868686]">
      <div className="mb-12 p-3 rounded-[16px]" style={{ background: 'linear-gradient(224deg, #343434 -0.45%, #222121 100.47%)' }}><LogoIcon/></div>
      <div className="p-3 mt-4 rounded-[6px]" style={{ background: 'var(--Graphite, #353A3E)' }}><HomeIcon /></div>
      <div className="p-3 mt-4 rounded-[6px]"><PenIcon /></div>
      <div className="p-3 mt-4 rounded-[6px]"><FolderIcon /></div>
      <div className="p-3 mt-4 rounded-[6px]"><AppsIcon /></div>
      <div className="p-3 mt-4 rounded-[6px]"><CoinIcon /></div>
      <div className="p-3 mt-4 rounded-[6px]"><HandshakeIcon /></div>
      <div className="mt-auto p-3 mb-4 rounded-[6px]"><SettingsIcon /></div>
    </aside>
  );
}
