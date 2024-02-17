import Header from "@/components/shared/Header";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ProductCard from "@/components/shared/productCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">
              Meet Karan Barman: Crafting Digital Experiences with Passion
            </h2>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex gap-2"
              )}
              href={"https://github.com/KaranBarman"}
            >
              Github <Github className="h-4 w-4" />
            </Link>
          </div>
          <p>
            Hi, I&apos;m Karan Barman, a website developer based in Jaipur,
            India. I specialize in crafting dynamic websites using a versatile
            tech stack, including Next.js, React.js, Tailwind CSS, Laravel, and
            more. With a passion for innovative design and seamless
            functionality, I bring digital visions to life. Explore my portfolio
            to see how I can elevate your online presence.
          </p>
        </div>
        <div className=" mt-10 flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Projects I&apos;ve Built</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-6">
            <ProductCard
              heading="Ecommerce website"
              linkGit="github.com/karanbarman"
              linkWebsite="karan-two.vercel.app"
              bannerImg="/images/profile.jpg"
            />
            <ProductCard
              heading="Ecommerce website"
              linkGit="github.com/karanbarman"
              bannerImg="/images/banner4.png"
              linkWebsite="karan-two.vercel.app"
            />
            <ProductCard
              heading="Ecommerce website"
              linkGit="github.com/karanbarman"
              bannerImg="/images/banner3.png"
              linkWebsite="karan-two.vercel.app"
            />
            <ProductCard
              heading="Ecommerce website"
              linkGit="github.com/karanbarman"
              bannerImg="/images/banner3.png"
              linkWebsite="karan-two.vercel.app"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
