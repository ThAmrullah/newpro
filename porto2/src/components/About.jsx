import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section
      id="about"
      class="flex-col justify-end px-24 py-20 bg-gradient-to-r from-teal-500 lg:w-full overflow-hidden"
    >
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-10 lg:w-1/2">
            <h4
              class="font-bold uppercase text-primary text-lg mb-3"
              data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              about{" "}
              <span className="font-mono text-green-600 text-4xl lg:text-5xl">
                Me
              </span>
            </h4>
            <h2
              class="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl"
              data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              A Junior Web Developer
            </h2>
            <p
              class="font-medium text-base text-slate-600 mb-6 lg:text-lg"
              data-aos="zoom-out-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Trying something new in the world of programming, studying and
              learning to build my quality, I focused on taking on the frontend
              part of a website.
            </p>
          </div>
          <div
            class="w-full px-4 lg:w-1/2"
            data-aos="zoom-out-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <h3 class="font-bold text-dark text-2xl mb-4 lg:text-3xl sm:pt-2 lg:pt-10">
              my Skill
            </h3>
            <p class="font-medium text-base text-slate-600 mb-6 lg:text-lg font-inter">
              I mastered several basic skills in creating websites based on
              HTML, CSS, and focused on React Javascript in frontend form using
              the tailwindcss framework
            </p>

            <div class="flex items-center">
              <img
                src="../../public/project.png"
                className="w-80 h-30 py-8 min-w-screen"
                alt=""
              />
            </div>
          </div>
        </div>
        <button>
          <NavLink
            to="/"
            className={
              "absolute text-base bg-green-500 mt-4 items-center max-w-60 rounded-md duration-300 ease-in-out hover:bg-green-400 py-1 px-6"
            }
          >
            Back
          </NavLink>
        </button>
      </div>
    </section>
  );
}
