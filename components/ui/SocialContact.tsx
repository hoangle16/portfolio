import React from "react";
import { Social } from "@/types/profile";

interface SocialContactProps {
  socials: Social[];
}

export const SocialContact: React.FC<SocialContactProps> = ({ socials }) => {
  return (
    <div className="flex gap-4 md:gap-6">
      {socials.map((social) => (
        <a
          key={social.link}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform bg-white dark:bg-gray-300 rounded-lg p-2 flex justify-between items-center"
        >
          <i className={`text-3xl ${social.icon}`} />
        </a>
      ))}
    </div>
  );
};
