import React from "react";

export const SocialContact: React.FC = () => {
  const socials = [
    {
      link: "https://github.com/hoangle16",
      icon: "devicon-github-original colored",
    },
    {
      link: "https://linkedin.com/in/hoangle98",
      icon: "devicon-linkedin-plain colored",
    },
    {
      link: "https://facebook.com/hoangle101298/",
      icon: "devicon-facebook-original colored",
    },
  ];
  return (
    <div className="flex gap-4 md:gap-6">
      {socials.map((social) => (
        <a
          key={social.link}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform bg-white rounded-lg p-2 flex justify-between items-center"
        >
          <i className={`text-3xl ${social.icon}`} />
        </a>
      ))}
    </div>
  );
};
