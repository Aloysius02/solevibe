import {
  Button
} from "../../../../components/ui/button";

export const TopSellingProductsSection = (): JSX.Element => {
  // Product data for mapping
  const products = [{
    id: 1,
    name: "perspiciatis unde",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    price: "$65",
    image: "/shoe3-1.png",
    imageSize: "w-[399px] h-[399px]",
    imagePosition: "top-0 left-px",
    cardPosition: "top-0 left-0",
    contentOffset: "top-[118px]",
    namePosition: "top-[376px]",
    descPosition: "top-[437px]",
    pricePosition: "top-[550px]",
    buttonPosition: "top-[553px]",
  },
    {
      id: 2,
      name: "perspiciatis unde",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe3-1.png",
      imageSize: "w-[399px] h-[399px]",
      imagePosition: "top-0 left-px",
      cardPosition: "top-[618px] left-0",
      contentOffset: "top-[118px]",
      namePosition: "top-[376px]",
      descPosition: "top-[437px]",
      pricePosition: "top-[550px]",
      buttonPosition: "top-[553px]",
    },
    {
      id: 3,
      name: "perspiciatis unde",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe6-1.png",
      imageSize: "w-[295px] h-[295px]",
      imagePosition: "top-0 left-[53px]",
      cardPosition: "top-[114px] left-[421px]",
      contentOffset: "top-[49px]",
      namePosition: "top-[307px]",
      descPosition: "top-[368px]",
      pricePosition: "top-[481px]",
      buttonPosition: "top-[484px]",
    },
    {
      id: 4,
      name: "perspiciatis unde",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe5-3.png",
      imageSize: "w-[399px] h-[399px]",
      imagePosition: "top-0 left-px",
      cardPosition: "top-[69px] left-[842px]",
      contentOffset: "top-[94px]",
      namePosition: "top-[352px]",
      descPosition: "top-[413px]",
      pricePosition: "top-[526px]",
      buttonPosition: "top-[529px]",
    },
    {
      id: 5,
      name: "perspiciatis unde",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe6-1.png",
      imageSize: "w-[295px] h-[295px]",
      imagePosition: "top-0 left-[53px]",
      cardPosition: "top-[732px] left-[421px]",
      contentOffset: "top-[49px]",
      namePosition: "top-[307px]",
      descPosition: "top-[368px]",
      pricePosition: "top-[481px]",
      buttonPosition: "top-[484px]",
    },
    {
      id: 6,
      name: "perspiciatis unde",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe5-3.png",
      imageSize: "w-[399px] h-[399px]",
      imagePosition: "top-0 left-px",
      cardPosition: "top-[687px] left-[842px]",
      contentOffset: "top-[94px]",
      namePosition: "top-[352px]",
      descPosition: "top-[413px]",
      pricePosition: "top-[526px]",
      buttonPosition: "top-[529px]",
    },
  ];

  return (
    <section className="relative w-full py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center justify-center gap-2.5 px-[30px] py-3 bg-[#ffffff03] rounded-[20px] border-[none] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(109,247,24,1)_0%,rgba(146,52,45,0)_52%,rgba(109,247,24,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
            <h2 className="relative w-fit [font-family:'Outfit',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-[normal]">
              Our Top Selling
            </h2>
          </div>
        </div>

        {/* Products Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative w-[406px] h-[642px] ${product.cardPosition}`}
              >
              <div className="relative w-[400px] h-[642px]">
                {/* Product Image */}
                <img
                className={`absolute ${product.imageSize} ${product.imagePosition} object-cover`}
                alt="Shoe"
                src={product.image}
                />

              {/* Card Background */}
              <div
                className={`w-[400px] h-[524px] ${product.contentOffset} left-0 bg-[#b8735033] border-[none] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] absolute rounded-[65px] shadow-blur before:content-[''] before:absolute before:inset-0 before:p-1.5 before:rounded-[65px] before:[background:linear-gradient(142deg,rgba(184,116,80,1)_0%,rgba(146,52,45,0)_52%,rgba(184,116,80,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
                />

              {/* Product Name */}
              <div
                className={`absolute ${product.namePosition} left-[34px] [font-family:'Outfit',Helvetica] font-medium text-white text-4xl text-center tracking-[0] leading-[normal]`}
                >
                {product.name}
              </div>

              {/* Product Description */}
              <div
                className={`w-[314px] ${product.descPosition} left-[34px] absolute opacity-70 [font-family:'Outfit',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]`}
                >
                {product.description}
              </div>

              {/* Product Price */}
              <div
                className={`${product.pricePosition} left-[34px] absolute [font-family:'Outfit',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]`}
                >
                {product.price}
              </div>

              {/* Add to Cart Button */}
              <div
                className={`absolute w-10 h-10 ${product.buttonPosition} left-[308px]`}
                >
                <Button
                  variant="outline"
                  className="relative h-10 w-10 rounded-[20px] border border-solid border-white shadow-[0px_4px_4px_#00000040] p-0"
                  >
                  <img
                  className="w-[19px] h-[19px]"
                  alt="Add to cart"
                  src="/vector.svg"
                  />
              </Button>
            </div>
          </div>
          </div>
        ))}
    </div>
  </div>
</section>
);
};