import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex-col px-24 py-20 bg-gradient-to-r from-teal-500">
      <img
        src="../../public/logoTA.png"
        className="py-8 pt-10 w-40 md:w-52 lg:w-60"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        alt=""
      />
      <div>
        <nav>
          <ul
            className="flex space-x-4 text-blue-900 text-3xl md:text-3xl lg:text-4xl font-thin mb-20"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <Link to="about" className="hover:text-slate-300">
              about
            </Link>

            <Link to="blog" className="hover:text-slate-300">
              blog
            </Link>

            <Link to="connect" className="hover:text-slate-300">
              connect
            </Link>
          </ul>
        </nav>
      </div>
      <div>
        <div
          className=" font-semibold text-2xl md:text-3xl"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Halo, I am
          <span className=" text-3xl lg:text-4xl font-bold font-mono text-green-600 tracking-wider">
            {" "}
            Thatit Amrullah
          </span>{" "}
          - Junior Programmer Specially Front End From Jakarta, Indonesia.
        </div>
        <p
          className="pt-2 text-slate-500"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          reiciendis provident eum distinctio explicabo deserunt obcaecati rem
          iure possimus ratione! tempore.
        </p>
        <button
          a
          href="https://whatsapp.com/082113561068"
          className="md:text-base bg-green-500 mt-4 items-center max-w-60 rounded-md duration-300 ease-in-out hover:bg-green-400 py-2 px-6"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}
