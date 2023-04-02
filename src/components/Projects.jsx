const callouts = [
  {
    name: 'Desk and Office Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis beatae cumque! Consequuntur quos, laborum iure non doloremque, aut, voluptas quam nulla iste similique neque commodi dignissimos quisquam libero? Neque!',
    description: 'Work from home accessories',
    imageSrc: 'https://user-images.githubusercontent.com/82792300/229312467-e323acbf-8394-49a5-b0ac-e029e3e60c6f.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://user-images.githubusercontent.com/82792300/207756222-05a3f201-dc08-40c8-9ca8-f494fe3bca68.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://user-images.githubusercontent.com/82792300/196270573-0d7dacbd-9142-4cef-a72b-5da9d2d994bd.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Projects() {
  return (
    <div id="projects" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="mt-6 text-base font-semibold text-gray-900">{callout.description}</p>
                <h3 className="text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
