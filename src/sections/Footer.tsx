import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Image src={Logo} alt="Logo Image" height={40} />
        <nav>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">About</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>
      </div>
    </footer>
  );
};
