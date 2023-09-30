import React from "react";
import Delivery from "../img/delivery.png";
import Herobg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex flex-1 flex-col items-start  justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-green-100 px-2 py-1">
          <p className="text-base text-green-500 font-semibold">
            vegetable delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Best vegetables in the{" "}
          <span className="text-green-600 text-[3rem] lg:text-[5rem]">
            Town
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          magnam magni. Corrupti quasi facilis praesentium perferendis
          exercitationem iusto beatae dolor natus! Laborum accusantium nihil ex
          odio quasi? Impedit, perferendis enim!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-green-300 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={Herobg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt=""
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center rounded-3xl justify-center  lg:px-32 py-4 gap-2 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt=""
                />
                <p className="text-base lg:text-lg font-semibold mt-2 lgmt:-4 text-textColor">
                  {n.name}
                </p>
                <p className="text-sm text-lighttextGray font-semibold">
                  Rs.{n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
