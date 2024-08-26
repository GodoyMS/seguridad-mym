import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";

type Props = {};

const links = [
    { id: 1, name: "Inicio", link: "/" },

  { id: 2, name: "Base de datos", link: "/base-de-datos" },
  { id: 3, name: "Tablero interactivo", link: "/tablero-interactivo" },
  { id: 4, name: "Indicadores", link: "/indicadores" },
  { id: 6, name: "Publicaciones", link: "/publicaciones" },
  { id: 5, name: "Mapas", link: "/mapas" },

  // { id: 3, name: "Servicios", link: "/servicios" },
  // { id: 3, name: "Nuestro equipo", link: "/nuestro-equipo" },
];

function NavBar({}: Props) {
  const [activeSheetMobile, setActiveSheetMobile] = useState(false);

  return (
    <div className="  w-full  z-[50]">
      <div className=" w-full max-w-7xl mx-auto ">
        <Sheet open={activeSheetMobile} onOpenChange={setActiveSheetMobile}>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <MdOutlineMenu className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </div>

              <div className=" flex flex-col gap-2 justify-start">
                {links.map((e) => (
                  <Button
                    className=" flex justify-start"
                    variant={"ghost"}
                    onClick={()=>setActiveSheetMobile(false)}
                    asChild
                  >
                    <Link
                      href={e.link}
                      className="text-muted-foreground text-2xl transition-colors hover:text-foreground whitespace-nowrap"
                      prefetch={false}
                    >
                      {e.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className=" flex justify-between items-center w-full">
            {/* <Link href="/" className=" order-2 md:order-1 w-28 md:w-32 h-full">
            <img
              className=" w-full "
              src="/assets/images/logo/logo-demo.png"
            />
          </Link> */}
            <Link
              href="/"
              className=" order-2 md:order-1  inline-flex justify-center md:justify-start gap-2 items-center"
            >
              <img
                alt="Logo"
                width={300}
                height={100}
                className="block dark:hidden w-full h-24 object-cover "
                src="/assets/images/logo.png"
              />
              <Image
                alt="Nymphoria Labs logo"
                width={500}
                height={100}
                className="hidden  dark:block w-full h-16 object-contain"
                src="/assets/images/logo/logo-dark2.png"
              />
            </Link>

            <div className=" md:order-2 flex-1 justify-center hidden md:flex flex-row gap-2">
              {links.map((e) => (
                <Button className="" style={{fontSize:14}} variant={"ghost"} asChild>
                  <Link
                    href={e.link}
                    className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
                    prefetch={false}
                  >
                    {e.name}
                  </Link>
                </Button>
              ))}
            </div>

            <div className=" order-3 flex justify-start gap-2 items-center md:order-3  ">
              <Button variant={"outline"} asChild className=" px-6">
                <Link href="/contacto" prefetch={false}>
                  Login
                </Link>
              </Button>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActiveSheetMobile(true)}
              className=" md:order-1 md:hidden shrink-0 "
            >
              <MdOutlineMenu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default NavBar;
