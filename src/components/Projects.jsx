const projects = [
  {
    src: "https://user-images.githubusercontent.com/82792300/229312467-e323acbf-8394-49a5-b0ac-e029e3e60c6f.png",
    alt: "Spudget",
    name: "Spudget",
    description:
      "React budget app, built with MERN Stack. Utilize OCR to recognize texts from receipt, convert to data into the database, then visualize receipts data with PlotlyJS by month.",
    technology:
      "Mongoose, MongoDB, GraphQL, ApolloGraphQL, Mindee, Multer, React, JavaScript, Plotly.Js",
    contribution:
      `Database modeling, GraphQL development, OCR integration, image uploading,
      and front-end development`,
    github: "https://github.com/WesleyLere/Spudget",
    live: "https://spudget.herokuapp.com/",
  },
  {
    src: "https://user-images.githubusercontent.com/82792300/207756222-05a3f201-dc08-40c8-9ca8-f494fe3bca68.png",
    alt: "Gameboxd",
    name: "Gameboxd",
    description:
      "A Full-Stack game review app. With STEAM API integration, display a list of STEAM games match the search keywords. User's ratings, and reviews are stored in mySQL database. Game Page shows game's name and description, and every ratings and reviews from different users. On Profile Page, is a list of user's favorite games.",
    technology:
      "NodeJS/Express, JavaScript, Sequelize, MySQL2, Handlebars.Js, Nodemailer, Bcrypt",
    contribution:
      `Database 
      modeling, Server Side Rendering, SteamAPI integration, and 
      front-end development`,
    github: "https://github.com/WesleyLere/Gameboxd",
    live: "https://gamebox.herokuapp.com/",
  },
  {
    src: "https://user-images.githubusercontent.com/82792300/196270573-0d7dacbd-9142-4cef-a72b-5da9d2d994bd.png",
    alt: "Marvelite Hub",
    name: "Marvelite Hub",
    description:
      "A Marvel Comics and Movies search app. Features search history, display character data and a list of character featured comics. The comic details are viewed from a modal. Using the same Marvel character as keywords to search for movies in OMDB API. ",
    technology:
      "JavaScript, Marvel API, OMDB API, Bulma, JQuery",
    contribution:
      `Marvel API integration, Bulma modals for comic details, search history 
      implementation using local storage.`,
    github: "https://github.com/kipschetnan/Marvelite-Hub",
    live: "https://kipschetnan.github.io/Marvelite-Hub/",
  },
];
export default function Projects() {
  return (
    <div id="projects" className="bg-gray-100">
      <h2 className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 text-4xl font-bold text-gray-900">
        Projects
      </h2>
      {projects.map(
        ({
          src,
          alt,
          name,
          description,
          technology,
          contribution,
          github,
          live,
        }) => (
          <div
            key={name}
            className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-2 gap-y-4 px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
          >
            <img
              src={src}
              alt={alt}
              className="lg:col-span-1  rounded-lg bg-gray-100"
            />
            <div className="col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {name}
              </h2>
              <p className="mt-4 text-gray-500">{description}</p>

              <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:gap-y-1 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Technologies</dt>
                  <dd className="mt-1 text-sm text-gray-500">{technology}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Contributions</dt>
                  <dd className="mt-1 text-sm text-gray-500">{contribution}</dd>
                </div>
              </dl>
              <div className="mt-4 flex gap-x-3">
                <a
                  href={github}
                  target="blank"
                  className="cssbuttons-io w-auto text-sm px-2 py-1 sm:px-4 sm:py-2"
                >
                  <span>
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>github [#142]</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke-width="0.0002"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          {" "}
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-140.000000, -7559.000000)"
                            fill="#fff"
                          >
                            {" "}
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              {" "}
                              <path
                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                id="github-[#142]"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    GitHub
                  </span>
                </a>
                <a
                  href={live}
                  target="blank"
                  className="cssbuttons-io w-auto text-sm px-2 py-1 sm:px-4 sm:py-2"
                >
                  <span>
                    <svg
                      version="1.1"
                      id="_x32_"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xml:space="preserve"
                      fill="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <style type="text/css">{` .st0{fill:#fff;} `}</style>{" "}
                        <g>
                          {" "}
                          <path
                            className="st0"
                            d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256 C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031 c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031 l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
