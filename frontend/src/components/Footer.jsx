import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0  w-full bg-slate-950">
      <div className="flex h-32 flex-col items-center justify-center ">
        <div className="flex items-center justify-center pb-4">
          <img src="/house.svg" alt="logo" width={50} />
          <h2 className="text-slate-50">DreamDwell</h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <FacebookLogo
            size={24}
            className="cursor-pointer"
            color="#fcfcfc"
            weight="light"
          />
          <InstagramLogo
            size={24}
            className="cursor-pointer"
            color="#fcfcfc"
            weight="light"
          />
          <PinterestLogo
            size={24}
            className="cursor-pointer"
            color="#fcfcfc"
            weight="light"
          />
          <YoutubeLogo
            size={24}
            className="cursor-pointer"
            color="#fcfcfc"
            weight="light"
          />
        </div>
      </div>
      <div className="flex items-center justify-center bg-slate-900 p-2">
        <span className="text-center text-sm text-slate-100">
          Copyright &copy; {currentYear} DreamDwell.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
