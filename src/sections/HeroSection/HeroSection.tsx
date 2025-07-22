import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container relative mx-auto px-4">
        {/* Background element */}
        <div className="absolute left-[-20%] top-[-20%] w-[60%] md:w-[50%]">
          <img
            className="h-auto w-full"
            alt="Ellipse background"
            src="/ellipse-4.svg"
          />
        </div>

        {/* Header Navigation */}
        <header className="relative mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="font-outfit font-bold text-3xl text-white">
            SOLEVIBE
          </div>

          <nav className="flex flex-wrap items-center gap-4 md:gap-[60px]">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-outfit text-xl md:text-2xl text-white hover:text-new-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <img
              className="h-[18px] w-[145px]"
              alt="Social media icons"
              src="/frame-2.svg"
            />
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-outfit font-bold text-5xl md:text-7xl lg:text-[100px] text-new-primary leading-tight">
              Step In Style
            </h1>
            <p className="mt-8 font-outfit text-lg md:text-xl text-white opacity-70 max-w-[565px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="rounded-xl px-10 py-3 text-xl font-normal bg-gradient-to-r from-[rgba(129,79,39,1)] to-[rgba(33,20,10,1)] hover:opacity-90">
                Explore
              </Button>
              <Button
                variant="outline"
                className="rounded-xl px-10 py-3 text-xl font-normal text-white border-none relative before:content-[''] before:absolute before:inset-0 before:p-[3px] before:rounded-xl before:bg-gradient-to-r before:from-[rgba(129,79,39,1)] before:to-[rgba(33,20,10,1)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:pointer-events-none hover:opacity-90"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <img
              className="w-full h-auto object-cover"
              alt="Shoe"
              src="/shoe5-3.png"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-new-primary rounded-[472.5px/430.5px] blur-[100px] opacity-20 h-[60%] w-[90%] mx-auto" />

            <div className="absolute bottom-0 left-0 right-0 max-w-[482px] mx-auto mb-8">
              <h3 className="font-outfit font-semibold text-2xl md:text-[32px] text-white">
                Commodo consequat.
              </h3>
              <p className="mt-4 font-outfit text-lg md:text-xl text-white opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="relative mt-16 w-full">
          <img
            className="h-auto w-full max-w-[733px] mx-auto"
            alt="Frame"
            src="/frame-9.svg"
          />
        </div>
      </div>
    </section>
  );
};