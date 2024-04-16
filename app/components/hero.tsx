import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto px-5 max-w-5xl">
      <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-2 text-base leading-6 text-gray-100 ring-1 ring-gray-300/10 hover:ring-gray-400/20">
            ✨ Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-brand-500">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl gradient-text">
            Stay on top of your pipeline. Google alerts on steroids for sales.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Aristotle is the relationship sales platform that one-man sales
            armies use to stay on top of mind and close more deals easier than
            they ever thought possible.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-brand-50">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffebcb_0%,#84725C_50%,#ffebcb_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py- text-lg font-medium text-white backdrop-blur-3xl hover:bg-brand-500 hover:text-brand-50 transition duration-300">
                Book an onboarding call
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flow-root">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src="/assets/placeholder.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
    </section>
  );
};

export default Hero;
