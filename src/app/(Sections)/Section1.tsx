import { getPlaceholderImage } from "@/utils/images";
import Component from "@/components/Title/Section1Title";
import NavLogoComponent from "@/components/NavLogo/LogoNav";
import MainImage from "@/components/ImageCarousel/MainHeroImage";

const images = [
    "@/assets/hero_image.svg",
]

export default async function Section1() {
    const imageWithPlaceholder = await Promise.all(
        images.map(async (src) => {
          const imageWithPlaceholder = await getPlaceholderImage(src)
          return imageWithPlaceholder
        }),
      )

    return (
        <div className="w-full h-auto bg-[#77412DB2]/70 flex flex-col items-center justify-center gap-y-4 relative">
            {
                imageWithPlaceholder.map((image) => {
                    return (
                        <MainImage image={image} key={image.src} />
                    )
                })
            }
            
            <NavLogoComponent />

            <Component />
        </div>
    )
}