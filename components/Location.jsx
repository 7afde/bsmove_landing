import Link from "next/link";
import messages from "../constants/estimate";
import Image from "next/image";
import img1 from "../public/images/prestation_3.png";

const Location = () => {
  return (
    <section className="bg-gradient-to-t from-white to-gray-900">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse gap-10 items-center justify-between sm:pt-40 pt-10 sm:pb-56 pb-10">
        <div className="text-center md:text-left mb-10 md:mb-0 md:mr-10 flex flex-col gap-3">
          <h3 className="text-primary-100 pb-1 sm:text-lg text-sm">
            {messages.title}
          </h3>
          <h1 className="font-bold sm:text-4xl text-xl sm:pb-16 pb-8">
            {messages.summury}
          </h1>
          <p className="text-gray-30 sm:text-base sm:px-0 px-4 text-sm mb-10">
            {messages.description}
          </p>
          <Link
            href="https://www.bsmove.com/estimate/details"
            className="text-white sm:mx-0 mx-auto py-4 bg-primary-100 text-center px-20 w-80 rounded text-xs font-semibold"
          >
            {messages.button}
          </Link>
        </div>
        <div className="w-full h-full sm:px-0 px-4">
          <Image
            src={img1}
            alt="prestation_3"
            quality={100}
            priority={true}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
