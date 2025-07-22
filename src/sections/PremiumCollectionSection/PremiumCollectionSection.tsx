import {
  Button
} from "../../../../components/ui/button";
import {
  Card,
  CardContent
} from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const PremiumCollectionSection = (): JSX.Element => {
  const carouselItems = [{
    id: 1,
    image: "/shoe1.png",
    title: "Discover Our Limited Edition Designer Collaborations",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  ];

  return (
    <section className="relative w-full py-16 flex justify-center">
      <div className="relative w-full max-w-[1280px]">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center justify-center gap-2.5 px-[30px] py-3 bg-[#ffffff03] rounded-[20px] border-[none] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(109,247,24,1)_0%,rgba(146,52,45,0)_52%,rgba(109,247,24,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <h2 className="relative w-fit mt-[-4.00px] [font-family:'Outfit',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-[normal]">
              Our Premium Collection
            </h2>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="w-full h-[671px] bg-transparent border-none">
          <CardContent className="p-0">
            <div className="w-full h-[604px] bg-[#b8735033] border-[none] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] rounded-[65px] shadow-blur relative before:content-[''] before:absolute before:inset-0 before:p-1.5 before:rounded-[65px] before:[background:linear-gradient(142deg,rgba(184,116,80,1)_0%,rgba(146,52,45,0)_52%,rgba(184,116,80,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {carouselItems.map((item) => (
                    <CarouselItem key={item.id} className="w-full h-full">
                      <div className="flex h-full">
                        {/* Product Image */}
                        <div className="relative w-[671px] h-full">
                          <img
                          className="w-full h-full object-cover"
                          alt="Shoe"
                          src={item.image}
                          />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col p-12 pt-[93px]">
                        <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal] mb-10">
                          {item.title}
                        </h3>

                        <p className="opacity-70 [font-family:'Outfit',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-pre-line mb-10">
                          {item.description}
                        </p>

                        <div className="flex justify-between items-center mt-auto">
                          <Button
                            variant="outline"
                            className="h-[41px] rounded-md border border-solid border-white bg-transparent hover:bg-white/10 hover:text-white"
                            >
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                              Buy Now
                            </span>
                          </Button>

                          <div className="flex items-center">
                            <button className="w-[23px] h-[41px] flex items-center justify-center">
                              <img
                              className="w-full h-full"
                              alt="Previous"
                              src="/vector-23.svg"
                              />
                          </button>

                          <span className="mx-4 [font-family:'Outfit',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                            01/04
                          </span>

                          <button className="w-[23px] h-[41px] flex items-center justify-center">
                            <img
                            className="w-full h-full"
                            alt="Next"
                            src="/vector-17.svg"
                            />
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex items-center gap-[3px] absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-[25px] h-1.5 bg-white rounded-[10px]" />
          <div className="w-1.5 h-1.5 bg-white rounded-[3px]" />
          <div className="w-1.5 h-1.5 bg-white rounded-[3px]" />
        </div>
      </div>
    </CardContent>
  </Card>
</div>
</section>
);
};