import { Raleway, Spirax } from "next/font/google";
import NextImage from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const spirax = Spirax({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});  

const railway = Raleway({
    subsets: ["latin"],
    weight: "400",
    style: "normal"
});

export default function Footer() {
    return (
        <div className="w-screen py-4 flex flex-col items-center justify-center gap-y-4 min-h-[300px] bg-[#903936]">
            <div className="flex flex-row items-center justify-center text-white xl:text-4xl text-2xl gap-x-4">
                <NextImage width={100} height={100} src="/assets/icon/logo.svg" alt="icon_only" className="w-auto xl:max-w-[100px] max-w-[40px]" />
                <p className={spirax.className}>
                    Serumah Kost Sendiri
                </p>
            </div>
            <div className="text-center text-white xl:text-sm text-xs">
                <p className={railway.className}>Jl. Serelek Jl. Carang Pulang No. 11 Cikarawang, Kec. <br />
                Dramaga, Kab. Bogor</p>
            </div>
            <div>
                <p className="text-xs italic text-white">Copyright by: Jawara Landing Page</p>
            </div>
            <div>
                <AlertDialog>
                    <AlertDialogTrigger className="text-white text-xs italic animation duration-200 hover:underline">Privacy Policy for Modbis Property</AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Privacy Policy</AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="flex flex-col gap-y-4 text-black">
                                <p className="text-black text-xs italic">
                                    Last updated: July 14, 2025
                                </p>
                                <p>
                                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                                </p>
                                <p>
                                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
                                </p>

                                <a href="https://www.termsfeed.com/live/314061fa-b53c-4d45-aa75-47d98acac700" target="_blank" rel="noopener noreferrer">Read the Privacy Policy in full</a>
                            </div>
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogAction>Thanks</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}