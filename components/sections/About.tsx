import Image from "next/image";
import { ScrollAnimation } from "../animations/ScrollAnimation";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-72px)] w-full flex flex-col md:flex-row items-center gap-4 py-16 px-4"
    >
      <ScrollAnimation direction="up" className="w-full flex justify-center md:w-1/2">
        <Image
          src="/images/about/avatar.jpg"
          alt="avatar"
          width={500}
          height={500}
          className="shadow-2xl rounded opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300"
        />
      </ScrollAnimation>
      <ScrollAnimation
        direction="down"
        className="w-full md:w-1/2 flex flex-col gap-4"
      >
        <h1 className="text-4xl mb-4">About Me</h1>
        <p className="text-lg text-justify">
          I&apos;m <span className="text-blue-700 font-semibold">Hoang</span> -{" "}
          <span className="text-blue-700 font-semibold">
            Full Stack Developer
          </span>{" "}
          with
          <span className="text-blue-700 font-semibold"> 4+ years</span> of
          experience building scalable web applications and enterprise
          solutions. Strong focus on delivering quality solutions using{" "}
          <span className="text-blue-700 font-semibold">
            Node.js, C#.NET, and React
          </span>
          . Key technical strengths:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Building scalable web applications with modern technologies</li>
          <li>Implementing complex features and maintaining code quality</li>
          <li>Strong debugging and problem-solving skills</li>
          <li>Experience with various databases</li>
        </ul>
      </ScrollAnimation>
    </section>
  );
};
