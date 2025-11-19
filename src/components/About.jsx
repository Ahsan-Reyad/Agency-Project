import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

export default function About() {
  return (
    <div className="relative px-6 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 text-gray-700 dark:text-white overflow-hidden">
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute right-0 top-0 -z-10 select-none pointer-events-none dark:hidden"
        data-parallax
        data-speed="0.12"
      />

      <div className="reveal" data-anim="up">
        <Title
          title="Who We Are"
          desc="We build meaningful digital experiences through creativity, strategy, and technology."
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 mt-6">
        <div className="flex-1 reveal" data-anim="up" data-delay="80">
          <h2 className="text-2xl font-semibold">
            Transforming Ideas Into Digital Reality
          </h2>

          <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              At{" "}
              <span className="font-semibold text-primary">
                Ahsan Web Studio
              </span>
              , we blend design, strategy, and technology to craft modern
              websites and digital solutions.
            </p>
            <p>
              From portfolio sites to full web applications — our work focuses
              on performance, usability, and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 stagger">
            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-900/40 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-primary">
                4+ Years Experience
              </h3>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                Serving clients with high-quality web solutions.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-900/40 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-primary">
                50+ Projects Completed
              </h3>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                Delivering clean and impactful digital products.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 reveal" data-anim="right" data-delay="140">
          <img
            src={assets.About}
            alt="About"
            className="w-full max-w-xl md:max-w-2xl rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
