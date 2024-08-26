import Link from "next/link";
import React from "react";
import NavHome from "./nav-home";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

const HeroHome = () => {
  return (
    <div className="relative">
      <div className=" absolute w-full h-full left-0 top-0">
        <div className=" w-full max-w-[1500px] mx-auto p-10 lg:p-14">
          <NavHome />
          <div className=" max-w-[800px]">
            <h1 className="text-white  font-normal text-2xl lg:text-5xl">
              Sistema de Seguridad Ciudadana Yanacancha & CODISEC
            </h1>
            <div className=" mt-12 inline-flex gap-2 items-center">
              <Button
                className="bg-white text-[#4B98A9] text-lg transition duration-300 hover:text-white hover:bg-[#4B98A9] rounded-md px-10 py-7 "
                asChild
              >
                <Link href={"/login"}>Login</Link>
              </Button>

              <Button
                color="white"
                variant={"outline"}
                className="hover:bg-[#4B98A9] bg-transparent hover:text-white text-lg transition duration-300 text-white  rounded-md px-10 py-7 "
                asChild
              >
                <Link href={"/leer-mas"}>
                    Leer más
                    <ArrowDown className=" ml-2"/>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <img
        className="w-full max-h-[900px] object-cover h-full"
        src="/assets/images/hero-01.jpg"
      />
    </div>
  );
};

export default HeroHome;
