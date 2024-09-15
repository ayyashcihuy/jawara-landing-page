import NextImage from "next/image";
import hero_image from "@/assets/hero_image.svg";
import { getPlaceholderImage } from "@/utils/images";
import Component from "@/components/Title/Section1Title";
import NavLogoComponent from "@/components/NavLogo/LogoNav";

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
                        <NextImage width={100} height={100} key={image.src} placeholder="blur" blurDataURL={image.placeholder} className="w-full -z-10 object-cover min-h-[720px]" src={hero_image} alt="hero_image"/>
                    )
                })
            }
            
            <NavLogoComponent />

            <Component />
        </div>
    )
}