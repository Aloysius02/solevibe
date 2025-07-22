import { Button } from "@/components/ui/button";

export const TopSellingProductsSection = (): JSX.Element => {
  const products = [
    {
      id: 1,
      name: "Perspiciatis Unde",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe3-1.png",
    },
    {
      id: 2,
      name: "Perspiciatis Unde",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe3-1.png",
    },
    {
      id: 3,
      name: "Perspiciatis Unde",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe6-1.png",
    },
    {
      id: 4,
      name: "Perspiciatis Unde",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe5-3.png",
    },
    {
      id: 5,
      name: "Perspiciatis Unde",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe6-1.png",
    },
    {
      id: 6,
      name: "Perspiciatis Unde",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      price: "$65",
      image: "/shoe5-3.png",
    },
  ];

  return (
    <section className="relative w-full py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center justify-center gap-2.5 px-[30px] py-3 bg-[#ffffff03] rounded-[20px] border-none backdrop-blur-[25px] relative before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(109,247,24,1)_0%,rgba(146,52,45,0)_52%,rgba(109,247,24,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <h2 className="relative font-outfit font-medium text-white text-[40px] text-center">
              Our Top Selling
            </h2>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-full max-w-[400px] bg-[#b8735033] rounded-[65px] backdrop-blur-[5px] shadow-blur p-6 pt-10 before:content-[''] before:absolute before:inset-0 before:p-1.5 before:rounded-[65px] before:[background:linear-gradient(142deg,rgba(184,116,80,1)_0%,rgba(146,52,45,0)_52%,rgba(184,116,80,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <div className="relative z-10 flex flex-col items-center">
                {/* Product Image */}
                <img
                  className="w-[295px] h-[295px] object-cover"
                  src={product.image}
                  alt={product.name}
                />

                {/* Product Info */}
                <h3 className="mt-6 font-outfit font-medium text-white text-3xl text-center">
                  {product.name}
                </h3>
                <p className="mt-4 font-outfit text-white text-lg text-center opacity-70">
                  {product.description}
                </p>
                <p className="mt-6 font-outfit font-medium text-white text-2xl">
                  {product.price}
                </p>

                {/* Add to Cart Button */}
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-[20px] border border-white shadow-[0px_4px_4px_#00000040] bg-transparent p-0"
                  >
                    <img
                      src="/vector.svg"
                      alt="Add to Cart"
                      className="w-[19px] h-[19px]"
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