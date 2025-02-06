"use client";
import React from "react";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";
import { SocialContact } from "../ui/SocialContact";
import { useContactForm } from "@/hooks/useContactForm";

export const Contact: React.FC = () => {
  const { isSubmitting, formStatus, handleSubmit } = useContactForm();
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-72px)] w-full flex flex-col md:flex-row justify-center items-center gap-8 py-16 px-4"
    >
      <ScrollAnimation
        direction="up"
        className="w-full md:w-1/2 flex flex-col items-center gap-8"
      >
        <h1 className="text-4xl">Get In Touch</h1>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-700" />
            <span className="text-lg">hoangl.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-blue-700" />
            <span className="text-lg">+84 369 874 979</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-blue-700" />
            <span className="text-lg">Da Nang, Vietnam</span>
          </div>
        </div>

        <SocialContact />
      </ScrollAnimation>

      <ScrollAnimation direction="down" className="w-full md:w-1/2">
        <h1 className="text-3xl mb-4 text-center block md:hidden">Say Hello</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 rounded border border-gray-300 focus:border-blue-700 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 rounded border border-gray-300 focus:border-blue-700 focus:outline-none"
              placeholder="Your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="p-2 rounded border border-gray-300 focus:border-blue-700 focus:outline-none resize-none"
              placeholder="Your message"
            />
          </div>

          {formStatus.message && (
            <div
              className={`p-3 rounded ${
                formStatus.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition-colors mt-4 self-start
              ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </ScrollAnimation>
    </section>
  );
};
