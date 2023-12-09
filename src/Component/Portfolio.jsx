import React from "react";
import ReactWeather from '../Assets/Portfolio/ReactWeather.jpg'
import installNode from "../Assets/Portfolio/installNode.jpg";
import navbar from "../Assets/Portfolio/navbar.jpg";
import ReactClassQuiz from '../Assets/Portfolio/ReactClassQuiz.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ReactWeather,
      title:"React Weather Forecast App",
      code:"https://github.com/srujank1995/Simple-Weather-app",
    },
    {
      id: 2,
      src: ReactClassQuiz,
      title:"React Quiz App",
      code:"https://github.com/srujank1995/Simple-Weather-app",
    },
    {
      id: 3,
      src: navbar,
      title:"Navigation bar using class",
      code:"https://github.com/srujank1995/Simple-Weather-app"
    },
    {
      id: 4,
      src: installNode,
      title:"Node (NPM) Properties.",
      code:"https://github.com/srujank1995/Simple-Weather-app"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105">
                  {title}
                </button>
                <a href={code} className="w-1 px-5 py-3 m-4 duration-200 hover:scale-105" >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
