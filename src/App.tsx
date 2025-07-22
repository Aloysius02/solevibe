import { CustomerReviewsSection } from "@/sections/CustomerReviewsSection";
import { FeaturedProductsSection } from "@/sections/FeaturedProductsSection";
import { FooterSection } from "@/sections/FooterSection";
import { HeroSection } from "@/sections/HeroSection";
import { PremiumCollectionSection } from "@/sections/PremiumCollectionSection";
import { TopSellingProductsSection } from "@/sections/TopSellingProductsSection";

const WebSite = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-full max-w-[1440px] relative">
        <div className="relative w-full">
          {/* Background decorative elements */}
          <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
            <div className="absolute w-[945px] h-[861px] top-0 left-0 bg-new-primary rounded-[472.5px/430.5px] blur-[100px] opacity-20" />
            <div className="absolute w-[809px] h-[737px] top-[1041px] right-0 bg-new-primary rounded-[404.5px/368.5px] blur-[100px] opacity-20" />
            <div className="absolute w-[809px] h-[806px] top-[2830px] right-0 bg-new-primary rounded-[404.5px/403px] blur-[100px] opacity-20" />
            <div className="absolute w-[809px] h-[806px] top-[4017px] left-[114px] bg-new-primary rounded-[404.5px/403px] blur-[100px] opacity-20" />
            <div className="absolute w-[809px] h-[806px] top-[1660px] left-[50px] bg-new-primary rounded-[404.5px/403px] blur-[100px] opacity-20" />
          </div>

          {/* Main content sections */}
          <HeroSection />
          <FeaturedProductsSection />
          <TopSellingProductsSection />
          <CustomerReviewsSection />
          <PremiumCollectionSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default WebSite;