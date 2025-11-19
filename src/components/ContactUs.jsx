import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "5c9627e8-c633-4f5d-88f7-7f78a49fdbda");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank You for Your Submition!");

        event.target.reset();
      } else {
        toast.error(data.massage);
      }
    } catch (error) {
      toast.error(error.massage);
    }
  };
  return (
    <div
      id="contact-us"
      className="relative flex flex-col items-center gap-7 px-6 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 text-gray-700 dark:text-white"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <Title
        title="Get In Touch"
        desc="Have a project in mind or want to collaborate? Fill the form and we’ll get back to you soon."
      />

      {/* Contact Form */}
      <div
        className="w-full max-w-3xl mt-10 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 
        bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl shadow-xl"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 
              dark:bg-gray-800 focus:outline-primary dark:focus:outline-primary"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email Address</label>

            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 
              dark:bg-gray-800 focus:outline-primary dark:focus:outline-primary"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 
              dark:bg-gray-800 resize-none focus:outline-primary dark:focus:outline-primary"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl 
            transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
