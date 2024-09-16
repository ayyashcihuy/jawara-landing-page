"use client";
import Lottie from "lottie-react";
import animationData from "@/assets/animation/Animation - 1726444917353.json";

export default function Loading() {
    return (
        <div className="w-full flex items-center justify-center h-full min-h-screen absolute z-30 bg-white">
            <Lottie
                animationData={animationData}
                loop
                autoplay
                className="max-w-[400px]"
            />
        </div>
    )
}