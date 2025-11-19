import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Khan",
      role: "Entrepreneur",
      feedback:
        "Ahsan Web Studio transformed my brand’s online presence. Clean, modern and perfectly executed.",
      image: assets.user1,
    },
    {
      name: "Daniel Roy",
      role: "Startup Founder",
      feedback:
        "Fast, professional, and skilled. Their web app development exceeded expectations!",
      image: assets.user2,
    },
    {
      name: "Mehedi Hassan",
      role: "Business Owner",
      feedback:
        "Exceptional attention to detail. My ecommerce site is now super fast and high converting.",
      image: assets.user3,
    },
  ];

  return (
    <div className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 text-gray-700 dark:text-white overflow-hidden">
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute left-0 bottom-0 -z-10 select-none pointer-events-none dark:hidden"
        data-parallax
        data-speed="0.08"
      />

      <div className="reveal" data-anim="up">
        <Title
          title="What Our Clients Say"
          desc="Real stories from people who trusted our work and experienced real results."
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 stagger">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-7 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl shadow-md hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-600"
              />
              <div>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
