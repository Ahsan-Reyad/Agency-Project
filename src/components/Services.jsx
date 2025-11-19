import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

function Services() {
  const servicesData = [
    {
      title: "Custom Website Development",
      description:
        "High-performance, responsive এবং visually polished ওয়েবসাইট তৈরি করি আপনার ব্যবসার প্রয়োজন অনুযায়ী।",
      icon: assets.ads_icon,
    },
    {
      title: "Full-Stack Web Applications",
      description:
        "Frontend থেকে Backend পর্যন্ত complete MERN stack solutions — secure, scalable এবং modern standard অনুযায়ী।",
      icon: assets.content_icon,
    },
    {
      title: "eCommerce Development",
      description:
        "Professional eCommerce store, product management, secure payment system এবং smooth user experience সহ।",
      icon: assets.marketing_icon,
    },
    {
      title: "Portfolio & Personal Branding Sites",
      description:
        "Creative এবং premium-looking personal portfolio website ডিজাইন ও ডেভেলপ করি, যেটা আপনার পরিচিতি আরও শক্তিশালী করে।",
      icon: assets.marketing_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute right-0 top-0 -z-10 select-none pointer-events-none dark:hidden"
        data-parallax
        data-speed="0.05–0.2"
      />
      <Title
        title="How can we help ?"
        desc="We are a modern web solutions agency crafting beautiful, high-performance digital experiences."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Services;
