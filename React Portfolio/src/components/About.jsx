import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Highly skilled and motivated MERN Full Stack Developer with 4 years of
          experience in designing, developing, and deploying scalable web
          applications. Proficient in building responsive front-end interfaces
          using React.js and robust back-end systems using Node.js and
          Express.js, with MongoDB for database management. Adept at
          collaborating with cross-functional teams to deliver high-quality
          software solutions. Passionate about writing clean, maintainable code
          and staying updated with the latest web development trends.
        </p>
        <br />
        <p className="text-xl">
          Front-End Development: React.js, Next.js TypeScript, HTML5, CSS3,
          JavaScript (ES6+), Redux, Bootstrap, Tailwind CSS, Material-UI
          <br />
          Back-End Development: Node.js, Express.js, RESTful APIs, GraphQL,
          Python Database Management: MongoDB, Mongoose, Firebase, MySql
          <br />
          Version Control: Git, GitHub, GitLab
          <br />
          DevOps & Deployment: Docker, AWS, Heroku, Netlify, Vercel Tools:
          Postman, VS Code, Webpack, Babel, NPM/Yarn
          <br />
          Other Skills: Agile Methodology, Scrum, Problem-Solving, Debugging
        </p>
      </div>
    </div>
  );
};

export default About;
