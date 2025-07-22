import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const CustomerReviewsSection = (): JSX.Element => {
  // Review data for mapping
  const reviews = [
    {
      name: "Priya K",
      image: "/mask-group.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      hasLeftGradient: true,
      hasRightGradient: false,
    },
    {
      name: "Arjun Patel",
      image: "/mask-group-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      hasLeftGradient: false,
      hasRightGradient: false,
    },
    {
      name: "Rahul Mehta",
      image: "/mask-group-2.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      hasLeftGradient: false,
      hasRightGradient: true,
    },
  ];

  return (
    <section className="flex flex-col items-center w-full py-16">
      <div className="inline-flex items-center justify-center gap-2.5 px-[30px] py-3 mb-12 bg-[#ffffff03] rounded-[20px] border-[none] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] relative before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(109,247,24,1)_0%,rgba(146,52,45,0)_52%,rgba(109,247,24,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <h2 className="relative w-fit mt-[-4.00px] [font-family:'Outfit',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-[normal]">
          Customer Review
        </h2>
      </div>

      <div className="flex flex-row gap-5 justify-center w-full">
        {reviews.map((review, index) => (
          <Card
            key={`review-${index}`}
            className="w-[400px] h-[340px] bg-[#b8735033] rounded-[65px] border-[none] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] shadow-blur relative before:content-[''] before:absolute before:inset-0 before:p-1.5 before:rounded-[65px] before:[background:linear-gradient(142deg,rgba(184,116,80,1)_0%,rgba(146,52,45,0)_52%,rgba(184,116,80,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="p-0 h-full relative">
              {review.hasLeftGradient && (
                <div className="w-full h-full top-0 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] absolute rounded-[65px]" />
              )}

              {review.hasRightGradient && (
                <div className="absolute w-full h-full top-0 left-0 rounded-[65px] rotate-180 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]" />
              )}

              <div className="relative z-10 p-9">
                <div className="flex items-center mb-10">
                  <Avatar className="w-[74px] h-[74px]">
                    <AvatarImage
                      src={review.image}
                      alt={`${review.name} profile`}
                    />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="ml-5">
                    <div className="[font-family:'Outfit',Helvetica] font-medium text-white text-[25px] tracking-[0] leading-[normal]">
                      {review.name}
                    </div>

                    <div className="flex mt-2">
                      {[1, 2, 3, 4].map((star) => (
                        <img
                          key={`star-${star}`}
                          className="w-[17px] h-[17px] mr-[3px]"
                          alt="Full star"
                          src="/vector-1.svg"
                        />
                      ))}
                      <img
                        className="w-[17px] h-[17px]"
                        alt="Half star"
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                </div>

                <p className="opacity-70 [font-family:'Outfit',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                  {review.text}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
