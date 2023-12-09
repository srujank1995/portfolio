import React from "react";

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

        <p className="text-xl mt-20">
          I am a dedicated Full Stack Developer with a year of hands-on
          experience in the field, specializing in React.js as my primary skill
          and possessing a strong foundation in Core Java with Spring Boot as my
          secondary expertise. My passion lies in crafting intuitive and
          responsive web interfaces using React.js, combined with the ability to
          build robust server-side applications. I take pride in my commitment
          to delivering high-quality solutions to complex challenges. My
          problem-solving skills, coupled with a knack for thriving in
          collaborative, Agile environments, make me an asset to any development
          team. One of my strengths is bridging the gap between front-end and
          back-end development, ensuring seamless, end-to-end application
          functionality.
        </p>

        <br />

        <p className="text-xl">
          In addition to my technical skills, I bring a strong sense of
          dedication and professionalism to every project. I am driven by a
          desire to continually learn and adapt to new technologies, staying at
          the forefront of the ever-evolving world of Full Stack Development.
          With a track record of success in creating efficient and effective web
          applications, I am excited to contribute my skills and expertise to
          innovative projects that demand excellence in both front-end and
          back-end development.
        </p>
      </div>
    </div>
  );
};

export default About;
