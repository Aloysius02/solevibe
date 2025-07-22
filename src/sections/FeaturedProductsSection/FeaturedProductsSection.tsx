import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    name: "StreetStyle High Tops",
    price: "$50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/shoe2.png",
    featured: true,
  },
  {
    id: 2,
    name: "EcoWalk Canvas",
    price: "$65",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/shoe4-1.png",
    featured: false,
  },
  {
    id: 3,
    name: "EcoWalk Canvas",
    price: "$65",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/shoe4-1.png",
    featured: false,
  },
];

export const FeaturedProductsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1242px] mx-auto py-16">
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center justify-center gap-2.5 px-[30px] py-3 bg-[#ffffff03] rounded-[20px] border-[none] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(109,247,24,1)_0%,rgba(146,52,45,0)_52%,rgba(109,247,24,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
          <h2 className="relative w-fit [font-family:'Outfit',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-[normal]">
            Our Trendy Kicks
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {/* Featured product */}
        <Card className="w-full h-[510px] bg-[#b8735033] border-[none] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] rounded-[65px] shadow-blur before:content-[''] before:absolute before:inset-0 before:p-1.5 before:rounded-[65px] before:[background:linear-gradient(142deg,rgba(184,116,80,1)_0%,rgba(146,52,45,0)_52%,rgba(184,116,80,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
          <CardContent className="p-0 flex h-full">
            <div className="relative w-[510px] h-[510px]">
              <img
                className="absolute w-[510px] h-[510px] top-0 left-0 object-cover"
                alt="Shoe"
                src="/shoe2.png"
              />
            </div>
            <div className="flex-1 pt-[99px] pr-[66px]">
              <h3 className="[font-family:'Outfit',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]">
                StreetStyle High Tops
              </h3>
              <p className="mt-[62px] opacity-70 [font-family:'Outfit',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-[54px] [font-family:'Outfit',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]">
                $50
              </div>
              <div className="mt-[19px] flex items-center gap-5">
                <Button
                  variant="outline"
                  className="h-auto px-[30px] py-2 rounded-md border border-solid border-white bg-transparent [font-family:'Outfit',Helvetica] font-normal text-white text-xl"
                >
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-[20px] border border-solid border-white shadow-[0px_4px_4px_#00000040] bg-transparent p-0"
                >
                  <img
                    className="w-[19px] h-[19px]"
                    alt="Cart"
                    src="/vector.svg"
                  />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid of smaller products */}
        <div className="grid grid-cols-2 gap-[42px]">
          {products.slice(1).map((product) => (
            <Card
              key={product.id}
              className="h-[673px] bg-[#b8735033] rounded-[65px] border-[none] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] shadow-blur before:content-[''] before:absolute before:inset-0 before:p-1.5 before:rounded-[65px] before:[background:linear-gradient(142deg,rgba(184,116,80,1)_0%,rgba(146,52,45,0)_52%,rgba(184,116,80,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
            >
              <CardContent className="p-0 flex flex-col items-center">
                <div className="w-[390px] h-[390px] mt-14">
                  <img
                    className="w-full h-full object-cover"
                    alt="Shoe"
                    src={product.image}
                  />
                </div>
                <div className="w-[501px] mt-[20px] px-7">
                  <h3 className="[font-family:'Outfit',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]">
                    {product.name}
                  </h3>
                  <p className="mt-[62px] opacity-70 [font-family:'Outfit',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                    {product.description}
                  </p>
                  <div className="mt-[75px] [font-family:'Outfit',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]">
                    {product.price}
                  </div>
                  <div className="mt-[19px] flex items-center gap-5">
                    <Button
                      variant="outline"
                      className="h-auto px-[30px] py-2 rounded-md border border-solid border-white bg-transparent [font-family:'Outfit',Helvetica] font-normal text-white text-xl"
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 rounded-[20px] border border-solid border-white shadow-[0px_4px_4px_#00000040] bg-transparent p-0"
                    >
                      <img
                        className="w-[19px] h-[19px]"
                        alt="Cart"
                        src="/vector.svg"
                      />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
