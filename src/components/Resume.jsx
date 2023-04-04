import React from "react";
import resume from "../assets/Resume2023.pdf"

export default function Resume() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="py-8">

          {/* Name */}

          <div className="flex flex-row md:items-center justify-between pb-2 border-b-2 border-gray-200">
            <h1 className="text-5xl font-bold">Minh Truong</h1>
            <a href={resume} target="blank" className="btn text-sm">
              <span className="flex justify-center h-full items-center">
                <svg className="mr-0.5" height="27px" width="27px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">{` .st0{fill:#fff;} `}</style> <g> <path class="st0 " d="M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514 c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716 c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z"></path> <path class="st0" d="M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599 c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612 C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23 c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z"></path> <path class="st0" d="M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868 c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856 C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23 c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46 c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z"></path> <path class="st0" d="M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599 c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56 c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733 c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z"></path> </g> </g></svg> PDF Version
              </span>
            </a>
          </div>

          {/* Geo location and info */}

          <div className="mt-4 text-gray-700">
            <p>Denver, Colorado</p>
            <p>
              Phone: <span className="font-medium">720-662-3769</span>
            </p>
            <p>
              Email: <a target="blank" href="mailto:mptruong49@gmail.com" className="font-medium">mptruong49@gmail.com</a>
            </p>
            <p className="mt-4 flex items-center">
              <span className="mr-4">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/minhtruong49/"
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                linkedin.com/in/minhtruong49
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-4">GitHub:</span>
              <a
                href="https://github.com/RyanTrian"
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                github.com/RyanTrian
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-4">Portfolio:</span>
              <a
                href="https://ryantrian.github.io/React-Portfolio/"
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                ryantrian.github.io/React-Portfolio
              </a>
            </p>
          </div>

          {/* Technical Skills */}

          <div className="mt-8">
            <h2 className="text-3xl font-bold border-b-2 border-gray-200">Technical Skills</h2>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>
                <span className="font-bold">Technical Languages:</span>{" "}
                Javascript, SQL, HTML, CSS
              </li>
              <li>
                <span className="font-bold">Applications:</span> Git,
                Express.Js, Node.Js, RESTful APIs, React, GraphQL
              </li>
            </ul>
          </div>
        </div>

        {/* Projects */}

        <div className="py-4">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200">Projects</h2>

          {/* Project 1 */}

          <div className="mt-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-lg font-bold">Spudget | React Budget App</div>
              <div className="flex items-center mt-2 md:mt-0">
                <a
                  href="https://github.com/WesleyLere/Spudget"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 mr-2 h-full"
                >
                  Github
                </a>
                <a
                  href="https://spudget.herokuapp.com/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 h-full"
                >
                  Live
                </a>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>
                <span className="font-bold">About:</span> Developed a React
                budget app with OCR integration to import receipts into a
                database and display daily and monthly spending graphs
              </li>
              <li>
                <span className="font-bold">Contribution:</span> Database
                modeling, GraphQL development, OCR integration, image uploading,
                and front-end development
              </li>
              <li>
                <span className="font-bold">Tools and languages:</span>{" "}
                Mongoose, ApolloGraphQL, Mindee, Multer, React, JavaScript,
                Plotly.Js
              </li>
            </ul>
          </div>

          {/* Project 2 */}

          <div className="mt-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-lg font-bold">Gameboxd | Game Review App</div>
              <div className="flex mt-2 md:mt-0">
                <a
                  href="https://github.com/WesleyLere/Gameboxd"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Github
                </a>
                <a
                  href="https://gamebox.herokuapp.com/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Live
                </a>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>
                <span className="font-bold">About:</span> Built a web app with 
                STEAM API integration, enabling user account creation, game 
                search, and bookmarking. Implemented user reviews and ratings, and 
                welcome emails via Nodemailer.
              </li>
              <li>
                <span className="font-bold">Contribution:</span> Database 
                modeling, Server Side Rendering, SteamAPI integration, and 
                front-end development
              </li>
              <li>
                <span className="font-bold">Tools and languages:</span>{" "}
                JavaScript, Sequelize, MySQL2, Handlebars.Js, Nodemailer
              </li>
            </ul>
          </div>

          {/* Project 3 */}

          <div className="mt-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-lg font-bold">Marvelite Hub | Comics and Movies Search App</div>
              <div className="flex mt-2 md:mt-0">
                <a
                  href="https://github.com/kipschetnan/Marvelite-Hub"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Github
                </a>
                <a
                  href="https://kipschetnan.github.io/Marvelite-Hub/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Live
                </a>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>
                <span className="font-bold">About:</span> Users can search for a 
                Marvel character and view a list of comics and movies the 
                character appears in. Implemented Bulma modals to display comic 
                details and incorporated search history using local storage for 
                user convenience.
              </li>
              <li>
                <span className="font-bold">Contribution:</span> Marvel API 
                integration, Bulma modals for comic details, search history 
                implementation using local storage.
              </li>
              <li>
                <span className="font-bold">Tools and languages:</span>{" "}
                JavaScript, Marvel API, Bulma, JQuery
              </li>
            </ul>
          </div>

        </div>
        
        {/* Experience */}

        <div className="py-4">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200">Experience</h2>
          <div className="mt-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-lg font-bold">Physics Tutor</div>
              <div className="text-gray-700">2019-2020</div>
            </div>
            <div className="text-gray-700 italic">
              <div>Colorado State University</div>
              <div>Fort Collins, CO</div>
            </div>
            <div className="mt-2 text-gray-700">
              As a Tutor, I work collaboratively with other team members to help
              students understand complex class concepts, guide them through
              homework problems, and review exam materials. I utilize effective
              communication and critical thinking skills to create an
              environment that fosters active learning and engagement.
            </div>
            <div className="mt-4 font-bold">Key Accomplishments:</div>
            <ul className="pl-4 list-disc list-inside mt-2 text-gray-700">
              <li>
                Successfully assisted an average of over 400 visits from 60+
                students per semester.
              </li>
              <li>
                Improved student success rate with about 90% of tutored students
                reporting better understanding and higher performance in the
                course.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Education */}
        
        <div className="py-4">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200">Education</h2>
          <div className="mt-4">
            <div className="text-lg">
              <span className="font-bold">Boot Camp Certificate:</span>
              <span className="italic">
                {" "}
                University of Minnesota, Minneapolis, MN
              </span>
            </div>
            <div className="text-gray-700">
              A 24-week intensive program focused on gaining technical
              programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap,
              Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.
            </div>
            <div className="mt-4 text-lg">
              <span className="font-bold">
                Bachelor of Science Degree in Biology:{" "}
              </span>
              <span className="italic">
                Colorado State University, Fort Collins, CO
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
