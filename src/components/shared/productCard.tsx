import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  linkGit: string;
  linkWebsite: string;
  bannerImg: string;
};

const ProductCard = ({ heading, linkGit, linkWebsite, bannerImg }: Props) => {
  return (
    <div className="rounded-md overflow-hidden">
      <Image
        src={bannerImg}
        alt="banner"
        height={100}
        width={100}
        unoptimized
        className="w-full h-44 object-cover"
      />
      <div className="dark:bg-white dark:text-black bg-black text-white px-3 py-4">
        <h2>{heading}</h2>
        <div className="mt-4 flex gap-2">
          <Link
            href={linkGit}
            className={cn(
              "dark:text-white text-black flex gap-2",
              buttonVariants({ variant: "outline" })
            )}
          >
            Github <Github className="h-4 w-4" />
          </Link>
          <Link
            href={linkWebsite}
            className={cn(
              "dark:text-white text-black flex gap-2",
              buttonVariants({ variant: "outline" })
            )}
          >
            Live websites <Link2 className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
