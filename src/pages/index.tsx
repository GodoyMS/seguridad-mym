import Image from "next/image";
import { Inter } from "next/font/google";
import HeroHome from "@/components/home/hero-home";
import VideoHome from "@/components/home/video-home";
import FeaturesHome from "@/components/home/features-home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" w-full min-h-screen ">
      <HeroHome/>
      <VideoHome/>
      <FeaturesHome/>
    </div>
    
  );
}
