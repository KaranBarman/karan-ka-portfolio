import React from "react";
import { ModeToggle } from "../mode-toggle";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { Contact2, Instagram } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header>
      <MaxWidthWrapper>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/logo1.png"}
              width={100}
              height={100}
              alt="profile"
              unoptimized
              className="rounded-full bg-yellow-400 w-20 h-20 border-4 border-white"
            />
            <div>
              <h1 className="text-2xl md:text-3xl hero_font">Karan Barman</h1>
              <p className="text-muted-foreground hero_font">
                Full stack developer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex gap-2"
              )}
              href={"https://www.instagram.com/snorlax.karan/"}
            >
              Instagram <Instagram className="h-4 w-4" />
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex gap-2"
              )}
              href={"https://www.instagram.com/snorlax.karan/"}
            >
              Contact <Contact2 className="h-4 w-4" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
