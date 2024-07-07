import { NavLink } from "react-router-dom";

export default function Blog() {
  return (
    <div className="flex-col justify-end px-24 py-20 bg-gradient-to-r from-teal-500">
      <h1
        className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-4"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        my{" "}
        <span className="font-mono text-green-600 text-4xl lg:text-5xl">
          Blog
        </span>
      </h1>
      <h3
        className="font-semibold text-slate-600 text-2xl lg:text-3xl"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        These Are Some Of My Little Notes
      </h3>
      <p
        className="max-w-xl"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        I tried to do some little creativity in the form of simple writing which
        I then put into a blog.
      </p>
      <div
        className="flex py-8 pt-10 w-100 md:w-200 lg:w-400 mx-auto space-x-4"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div>
          <img src="../../public/black.jpg" className="my-2" alt="" />
          <p className="text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            provident.
          </p>
          <a href="https://github.com/adityafer" className="text-blue-600">
            ..full text
          </a>
        </div>
        <div>
          <img src="../../public/black.jpg" className="my-2" alt="" />
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            adipisci!
          </p>
          <a href="https://github.com/adityafer" className="text-blue-600">
            ..full text
          </a>
        </div>
      </div>

      <NavLink
        to="/"
        className={
          "relative text-base bg-green-500 mt-4 items-center max-w-60 rounded-md duration-300 ease-in-out hover:bg-green-400 py-1 px-6"
        }
      >
        Back
      </NavLink>
    </div>
  );
}
