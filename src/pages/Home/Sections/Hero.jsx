import React from "react";
import Topbar from "../../../components/general/Topbar";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        className="w-full h-full rounded-[3rem] section-page bg-hero bg-cover brightness-75 bg-center"
      >
        <Topbar />

        <div className="w-full h-full mt-72 mb-28">
          <div className="md:w-2/5 w-4/5">
            <h1
              data-aos="fade-down"
              data-aos-delay="400"
              className="uppercase font-poppins font-semibold text-5xl"
            >
              all the{" "}
              <span className="text-pink-600 uppercase text-5xl">
                best songs
              </span>{" "}
              <br />
              in one place
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="600"
              className="text-2xl mt-11 font-medium text-gray-300 normal-case"
            >
              On our website, you can access an amazing collection of popular
              and new songs. Stream your favorite tracks in high quality and
              enjoy without interruptions. Whatever your taste in music, we have
              it all for you!
            </p>
            <div
              data-aos="fade-left"
              data-aos-delay="800"
              className=" mt-10 flex justify-between gap-x-5"
            >
              <button className="text-2xl font-semibold w-full h-[4rem] rounded-xl uppercase border bg-pink-600 text-white hover:scale-95 border-pink-600">
                discover now
              </button>
              <button className="text-2xl font-semibold w-full h-[4rem] rounded-xl hover:scale-95 uppercase border border-blue-600 text-blue-600">
                create playliist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
