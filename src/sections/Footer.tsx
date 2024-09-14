import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import Link from "next/link";
import Socialx from "@/assets/social-x.svg";
import Socialinsta from "@/assets/social-insta.svg";
import Sociallinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2Fd8FE)] before:absolute">
          <Image src={Logo} alt="Logo Image" height={40} className="relative" />
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row md: justify-center">
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">About</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>
        <div className="flex justify-center mt-6 gap-6">
          <Socialx />
          <Socialinsta />
          <Sociallinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 your company, inc. all rights reserved.
        </p>
      </div>
    </footer>
  );
};
