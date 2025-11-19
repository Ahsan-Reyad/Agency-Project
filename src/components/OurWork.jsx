import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

function OurWork() {
  const projectsData = [
    {
      title: "Modern Mobile Application",
      description:
        "A feature-rich mobile app designed with a clean UI, smooth interactions, and optimized performance for both Android and iOS platforms.",
      image: assets.work_mobile_app,
    },

    {
      title: "E-Commerce Web Platform",
      description:
        "A fully responsive e-commerce website built with secure checkout, dynamic product management, and a seamless shopping experience.",
      image: assets.work_dashboard_management,
    },

    {
      title: "Portfolio Website for Creators",
      description:
        "A fast and modern portfolio website crafted for creators to showcase their work with elegance, animations, and strong visual appeal.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Ideas Into Digital Products"
        desc="Showcasing our most recent projects built with precision, creativity, and a strong focus on user experience."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projectsData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} alt="" className="w-full rounded-2xl" />

            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;
