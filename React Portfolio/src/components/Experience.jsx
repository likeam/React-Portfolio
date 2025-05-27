import React from "react";
import next from "../assets/next.png";

import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import native from "../assets/native.png";
import node from "../assets/node.png";
import express from "../assets/Express.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import mongogdb from "../assets/MongoDB.png";
import mysql from "../assets/MySQL.png";
import postgres from "../assets/PostgresSQL.png";
import python from "../assets/Python.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: next,
      title: "NEXT",
      style: "shadow-gray-500 ",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-red-400",
    },
    {
      id: 6,
      src: native,
      title: "Native JS",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: node,
      title: "Node Js",
      style: "shadow-lime-400",
    },
    {
      id: 8,
      src: express,
      title: "Express Js",
      style: "shadow-cyan-400",
    },
    {
      id: 9,
      src: mongogdb,
      title: "Mongoose",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-400",
    },
    {
      id: 11,
      src: postgres,
      title: "PostgresSQL",
      style: "shadow-red-400",
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
