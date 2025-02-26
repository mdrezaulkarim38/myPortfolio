import { Link } from "react-router-dom";
import ProfolioImage from "./../assets/supermanshuvo.jpg";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 text-center pt-25 pb-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={ProfolioImage}
          alt="Profile"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:text-left px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-600">My Portfolio</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          I am a passionate developer creating modern and responsive web
          applications.
        </p>
        <div className="mt-6">
          <Link
            to="/project"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
