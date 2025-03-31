'use client';

export default function Hero({ title, blurb, image, scheduleLink, callLink }) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-8 xl:grid-cols-2 xl:gap-x-8">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                {title}
              </h1>
              <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
                {blurb}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href={scheduleLink}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Schedule a Call
                </a>
                <a href={callLink} className="text-sm font-semibold text-gray-900">
                  Call Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div>
              <img
                alt=""
                src={image}
                className="w-full max-w-lg rounded-2xl object-cover sm:max-w-none"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
