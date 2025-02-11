import Image from "next/image";
import { ScrollAnimation } from "../animations/ScrollAnimation";

interface AboutProps {
  avatarUrl: string;
  summary: string;
  details?: string[];
}

export const About: React.FC<AboutProps> = ({
  avatarUrl,
  summary,
  details,
}) => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-72px)] w-full flex flex-col md:flex-row items-center gap-4 py-16 px-4"
    >
      <ScrollAnimation
        direction="up"
        className="w-full flex justify-center md:w-1/2"
      >
        <Image
          src={avatarUrl}
          alt="avatar"
          width={500}
          height={500}
          priority
          className="w-[90%] h-auto shadow-2xl rounded opacity-85 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-300"
        />
      </ScrollAnimation>
      <ScrollAnimation
        direction="down"
        className="w-full md:w-1/2 flex flex-col gap-4"
      >
        <h1 className="text-4xl mb-4">About Me</h1>
        <p
          className="text-lg text-justify"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></p>
        <ul className="list-disc list-inside text-lg">
          {details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </ScrollAnimation>
    </section>
  );
};
