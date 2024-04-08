import messages from "../constants/whatWeDo";
import Image from "next/image";
import Link  from "next/link";
import img1 from "../public/images/prestation_3.png";
import { FaArrowRight } from "react-icons/fa";
const We = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-900">
      <section className="container mx-auto flex flex-col gap-4 justify-between items-center sm:pt-40 pt-10 sm:pb-56 pb-10">
        <div className="flex justify-center items-center flex-col ">
          <h3 className="text-center text-primary-100 pb-2 font-semibold text-lg">
            {messages.title}
          </h3>
          <h1 className="font-bold text-3xl pb-10">
            {messages.summury}
            <span className="text-primary-100">{messages.logo}</span>
          </h1>
          <p className="text-center mx-52 text-gray-20 pb-10">
            {messages.description}
          </p>
        </div>
        <div className="flex justify-between items-center gap-14">
          <Link
            href="https://www.bsmove.com/estimate/details"
            className="py-2 overflow-hidden shadow-lg hover:scale-105 duration-200 ease-in-out"
          >
            <Image
              src={img1}
              width={400}
              className="rounded mb-4 object-cover shadow-md"
            ></Image>
            <div className="px-8 flex justify-between items-center">
              <p>Déménagement</p>
              <FaArrowRight />
            </div>
          </Link>
          <Link
            href="https://www.bsmove.com/location-vehicules?tab=vehicle"
            className="py-2 overflow-hidden shadow-lg hover:scale-105 duration-200 ease-in-out"
          >
            <Image
              src={img1}
              width={400}
              className="rounded mb-4 object-cover shadow-md"
            ></Image>
            <div className="px-8 flex justify-between items-center">
              <p>Location Vehicules</p>
              <FaArrowRight />
            </div>
          </Link>
          <Link
            href="https://www.bsmove.com/achat-fournitures"
            className="py-2 overflow-hidden shadow-lg hover:scale-105 duration-200 ease-in-out"
          >
            <Image
              src={img1}
              width={400}
              className="rounded mb-4 object-cover shadow-md"
            ></Image>
            <div className="px-8 flex justify-between items-center">
              <p>Achat materiels</p>
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default We;
