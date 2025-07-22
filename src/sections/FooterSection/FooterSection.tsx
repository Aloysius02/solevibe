import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#" },
    { name: "Journal", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="relative w-full py-16 px-8 bg-[#b8735033] rounded-[65px] border-none backdrop-blur-[5px] shadow-blur before:content-[''] before:absolute before:inset-0 before:p-1.5 before:rounded-[65px] before:[background:linear-gradient(142deg,rgba(184,116,80,1)_0%,rgba(146,52,45,0)_52%,rgba(184,116,80,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="font-outfit font-bold text-white text-[32px]">
              SOLEV I BE
            </h2>
            <p className="mt-8 opacity-70 font-outfit font-normal text-white text-xl max-w-[422px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-outfit font-medium text-white text-3xl">
                Quick Links
              </h3>
              <nav className="mt-5 flex flex-col gap-5">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="opacity-70 font-outfit font-normal text-white text-2xl hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col">
              <h3 className="font-outfit font-medium text-white text-3xl">
                For Every Update&apos;s
              </h3>
              <div className="mt-5 flex">
                <div className="relative w-[431px] h-[72px] rounded-xl border-2 border-solid border-white">
                  <Input
                    className="absolute left-0 top-0 h-full w-full bg-transparent border-none text-white text-2xl font-outfit font-medium placeholder:text-white placeholder:opacity-70 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Enter Email"
                  />
                  <Button className="absolute right-0 top-0 h-full w-[190px] bg-white rounded-xl text-black text-2xl font-outfit font-bold hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex justify-end">
          <p className="opacity-70 font-outfit font-normal text-white text-xl">
            <span>Solevibe </span>
            <span className="font-semibold">©</span>
            <span> All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};