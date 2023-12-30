import "../css/Skills.css";

import bootstrap from "../images/svg/bootstrap.svg";
import csharp from "../images/svg/csharp.svg";
import css from "../images/svg/css.svg";
import figma from "../images/svg/figma.svg";
import github from "../images/svg/github.svg";
import html from "../images/svg/html.svg";
import js from "../images/svg/js.svg";
import laravel from "../images/svg/laravel.svg";
import mongodb from "../images/svg/mongodb.svg";
import mysql from "../images/svg/mysql.svg";
import nextjs from "../images/svg/nextjs.svg";
import php from "../images/svg/php.svg";
import ps from "../images/logo/ps.png";
import react from "../images/svg/react.svg";
import tailwind from "../images/svg/tailwind.svg";
import ts from "../images/svg/ts.svg";
import mui from "../images/logo/mui.png";

const skill = [
  { image: js, title: "JavaScript" },
  { image: ts, title: "TypeScript" },
  { image: php, title: "PHP" },
  { image: react, title: "React" },
  { image: nextjs, title: "Next.js" },
  { image: laravel, title: "Laravel" },
  { image: mysql, title: "MySQL" },
  { image: mongodb, title: "MongoDB" },
];
const skill2 = [
  { image: html, title: "HTML" },
  { image: css, title: "CSS" },
  { image: bootstrap, title: "Bootstrap" },
  { image: mui, title: "MUI" },
  { image: tailwind, title: "Tailwind CSS" },
  { image: react, title: "Reactstrap" },
  { image: csharp, title: "C#" },
  { image: github, title: "GitHub" },
  { image: ps, title: "Photoshop" },
  { image: figma, title: "Figma" },
];

const Skills = () => {
  return (
    <div>
      <div className="relative mx-auto mainSlides bg-soft h-auto w-11/12 lg:w-[920px] rounded-2xl py-2 lg:mx-0">
        <div className="absolute left-0 top-0 bg-gradient-to-r from-soft min-w-[70px] lg:min-w-[150px] min-h-[100%] z-10 rounded-bl-2xl rounded-tl-2xl"></div>
        <div className="absolute right-0 top-0 bg-gradient-to-l from-soft min-w-[70px] lg:min-w-[150px] min-h-[100%] z-10 rounded-br-2xl rounded-tr-2xl"></div>
        <div className="slider rounded-2xl mx-auto">
          <div className="slide-track">
            {skill.map((skillItem, index) => (
              <div className="slide" key={index}>
                <img className="mb-2 " src={skillItem.image} alt="" />
                <div className="text-white mt-auto font-bold text-md">
                  {skillItem.title}
                </div>
              </div>
            ))}
            {skill.map((skillItem, index) => (
              <div className="slide" key={index}>
                <img className="mb-2 " src={skillItem.image} alt="" />
                <div className="text-white mt-auto font-bold text-md">
                  {skillItem.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mx-auto mainSlidesL bg-soft h-auto w-11/12 lg:w-[920px] rounded-2xl py-2 lg:mx-0 mt-2">
        <div className="absolute left-0 top-0 bg-gradient-to-r from-soft min-w-[70px] lg:min-w-[150px] min-h-[100%] z-10 rounded-bl-2xl rounded-tl-2xl"></div>
        <div className="absolute right-0 top-0 bg-gradient-to-l from-soft min-w-[70px] lg:min-w-[150px] min-h-[100%] z-10 rounded-br-2xl rounded-tr-2xl"></div>
        <div className="sliderL rounded-2xl mx-auto">
          <div className="slideTrackL">
            {skill2.map((skillItem, index) => (
              <div className="slideL" key={index}>
                <img className="mb-2 " src={skillItem.image} alt="" />
                <div className="text-white mt-auto font-bold text-md">
                  {skillItem.title}
                </div>
              </div>
            ))}
            {skill2.map((skillItem, index) => (
              <div className="slideL" key={index}>
                <img className="mb-2 " src={skillItem.image} alt="" />
                <div className="text-white mt-auto font-bold text-md">
                  {skillItem.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
