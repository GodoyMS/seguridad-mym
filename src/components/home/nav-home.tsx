import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HeartIcon, ListChecksIcon, ListStartIcon, MapIcon, MenuIcon, TableIcon } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
const items = [
  {
    id: 1,
    link: "/base-de-datos",
    icon: HeartIcon,
    title: "BASE DE DATOS",
  },
  {
    id: 2,
    link: "/tablero-interactivo",
    icon: TableIcon,
    title: "TABLERO INTERACTIVO",
  },
  {
    id: 3,
    link: "/indicadores",
    icon: ListStartIcon,
    title: "INDICADORES ",
  },
  {
    id: 4,
    link: "/base-de-datos",
    icon: ListChecksIcon,
    title: "PUBLICACIONES",
  },
  {
    id: 5,
    link: "/maps",
    icon: MapIcon,
    title: "MAPAS",
  },
];
const NavHome = () => {
  return (
    <nav className=" flex justify-between items-center">
      <Link href={"/"}>
        <img src="/assets/images/logo.png" />
      </Link>
      <Dialog >
        <DialogTrigger asChild>
          <Button
            variant="default"
            className=" rounded-full flex flex-col py-8 gap-2 justify-center items-center bg-[#264666]"
          >
            <div className=" flex flex-col justify-center items-center">
              <MenuIcon size={25} className="  text-white" />
              <div>MENU</div>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className=" bg-transparent border-none text-white sm:max-w-[1200px]">
          <DialogHeader>
            <DialogDescription>
              <div className="">
              <div className=" grid  grid-cols-2 lg:grid-cols-5 gap-4 mt-10 ">
                {items.map((e) => (
                    
                    <Link className=" hover:border-[#4B98A9] hover:text-[#4B98A9] px-6 py-12 rounded-md text-white border-white border " key={e.id} href={e.link}>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <e.icon size={30}/>
                        <div className=" text-center text-lg">{e.title}</div>
                    </div>
                    </Link>
                ))}
              </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default NavHome;

