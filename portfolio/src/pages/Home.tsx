import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ProfolioImage from "./../assets/MyImage.jpeg";
import BackgroundImage from "./../assets/backgroundImage.jpg";

function Home() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 text-center pt-25 pb-10 px-6"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full md:w-1/2 flex justify-center mb-5">
        <img
          src={ProfolioImage}
          alt="Profile"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-gray-800 bg-white bg-opacity-80 p-6 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          <TypeAnimation
            sequence={[
              "Hi, I am Rezaul Karim",
              1000,
              "A Passionate Developer",
              1000,
              "Welcome to My Portfolio!",
              1000,
            ]}
            speed={50}
            className="text-blue-600"
            repeat={Infinity}
          />
        </h1>

        <p className="mt-4 text-lg text-gray-600 sm:text-xl text-center md:text-left">
        I am a passionate developer creating modern and responsive web applications using ASP.NET Core REST API for the backend and React.js for the frontend.
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
