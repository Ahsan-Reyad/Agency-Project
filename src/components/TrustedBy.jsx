import React from "react";
import { company_logos } from "../assets/assets";

function TrustedBy() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg-px24 xl:px40 gap-10 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold">Trusted by Forward-Thinking Brands</h3>
      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="max-h-5 sm:max-h-6 dark:drop-shadow-1xl"
          />
        ))}
      </div>
    </div>
  );
}

export default TrustedBy;
