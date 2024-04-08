import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
const NavBar = () => {
  return (
    <div className="h-[70px] flex justify-between items-center">
      <Link
        href="/"
        className="sm:flex sm:justify-center h-[60px] w-[130px] sm:ml-6 mx-auto pt-[10px] items-center"
      >
        <Image
          quality={100}
          priority={true}
          className="min-h-full min-w-full cursor-pointer object-contain"
          src={logo}
          width={130}
          height={60}
          alt="bsmove_logo"
        />
      </Link>
      <div className="lg:flex lg:flex-row-reverse lg:justify-start h-[60px] lg:items-center hidden">
        <Link
          href="https://www.bsmove.com/estimate/details"
          className="text-white bg-primary-100 py-[27px] px-10 text-xs font-semibold"
        >
          DEMANDE DE DEVIS
        </Link>
        <Link
          href="https://www.bsmove.com/location-vehicules?tab=vehicle"
          className="text-black py-[27px] px-10 text-xs font-semibold"
        >
          LOCATION CAMION
        </Link>
        <Link
          href="https://www.bsmove.com/location-vehicules?tab=lift"
          className="text-black py-[27px] px-10 text-xs font-semibold"
        >
          LOCATION MONTE-MEUBLE
        </Link>
        <Link
          href="https://www.bsmove.com/achat-fournitures"
          className="text-black py-[27px] px-10 text-xs font-semibold"
        >
          ACHAT MATERIEL
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
