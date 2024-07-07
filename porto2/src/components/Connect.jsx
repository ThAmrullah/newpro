import { NavLink } from "react-router-dom";

export default function Connect() {
  return (
    <div
      className=" justify-center items-center flex-wrap px-24 py-20 lg:mx-auto bg-gradient-to-r from-teal-500"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="w-full mx-auto ">
          <h1 className="font-semibold text-3xl md:text-4xl mb-4">
            How Can We Help?
          </h1>
          <h4 className="font-semibold mb-10 text-2xl text-slate-600">
            Send Us Message 😊
          </h4>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto border-black-[2px]">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <NavLink
        to="/"
        className={
          "absolute text-base bg-green-500 my-20 items-center rounded-md duration-300 ease-in-out hover:bg-green-400 py-1 px-6 overflow-hidden"
        }
      >
        Back
      </NavLink>
    </div>
  );
}
