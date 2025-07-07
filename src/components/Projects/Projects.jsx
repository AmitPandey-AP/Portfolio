import React from "react";

function Projects() {
  return (
    <div className="h-full w-full py-4 px-3">
      <div className="shadow-lg max-h-auto font-mono block mt-3 mb-10 justify">
        <h1 className="text-2xl font-extrabold justify-self-center">
          Projects
        </h1>
        <div className="max-h-auto font-mono block mt-10 ">
          <h1 className="text-xl font-extrabold justify-self-center underline">
            <a
              target="_blank"
              href="https://github.com/AmitPandey-AP/InvoiceGen"
            >
              InvoiceGen
            </a>
          </h1>
          <div className="px-10 py-5">
            <ul className="list-disc text-lg">
              <li className="font-bold ">
                <span className="text-xl font-extrabold"> Tech Stack:</span>{" "}
                SpringBoot, MongoDB, JWT, Clerk, React
              </li>
              <br />
              <li>
                Built a full-stack Invoice Generator application using Spring
                Boot and React, enabling users to create, view, and delete
                professional invoices with real-time UI updates.
              </li>
              <li>
                Enhanced user experience with PDF invoice downloads, Send to
                Email, toast notifications, and mobileresponsive design using
                Bootstrap CSS and React Hooks
              </li>
            </ul>
          </div>
        </div>
        <div className="max-h-auto font-mono block mt-10 ">
          <h1 className="text-xl font-extrabold justify-self-center underline">
            <a
              target="_blank"
              href="https://github.com/AmitPandey-AP/Grow-Carry"
            >
              Grow-Carry
            </a>
          </h1>
          <div className="px-10 py-5">
            <ul className="list-disc text-lg">
              <li className="font-bold ">
                <span className="text-xl font-extrabold"> Tech Stack:</span>{" "}
                React, Node.js, Express, MongoDB, Stripe, Cloudinary, JWT,
                Multer, Mongoose
              </li>

              <br />
              <li>
                Built secure RESTful APIs using Express and MongoDB with
                JWT-based auth and bcryptjs password encryption
              </li>
              <li>
                Integrated Stripe for seamless and secure checkout process with
                real-time payment handling
              </li>
              <li>
                Implemented image upload and storage via Multer and Cloudinary
                for product listings
              </li>
              <li>
                Utilized cookie-parser for session handling and CORS setup for
                frontend-backend communication
              </li>
            </ul>
          </div>
        </div>
        <div className="max-h-auto font-mono block mt-10 ">
          <h1 className="text-xl font-extrabold justify-self-center underline">
            <a target="_blank" href="https://github.com/AmitPandey-AP/Scatch">
              Scatch
            </a>
          </h1>
          <div className="px-10 py-5">
            <ul className="list-disc text-lg">
              <li className="font-bold ">
                <span className="text-xl font-extrabold"> Tech Stack:</span>{" "}
                Express, EJS, MongoDB, JWT, bcrypt, Multer, Cookie-Parser,
                Express-Session
              </li>

              <br />
              <li>
                Developed a dynamic, server-rendered premium bag store using
                Express.js and EJS templating
              </li>
              <li>
                Configured environment management and API secrets with dotenv
                and config
              </li>
              <li>
                Implemented image upload and storage via Multer and Cloudinary
                for product listings
              </li>
              <li>Utilized cookie-parser for session handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
