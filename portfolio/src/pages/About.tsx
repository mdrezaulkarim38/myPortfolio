import { useEffect, useState } from "react";
import BackgroundImage from "./../assets/backgroundImage.jpg";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center pt-20 pb-10 px-4" style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div
        className={`max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-10 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
          About Me
        </h2>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Hi, I'm{" "}
          <span className="font-semibold text-blue-600">MD Rezaul Karim</span>.
        </p>

        <div className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
          <p className="mb-4">
            I'm a{" "}
            <span className="font-semibold text-blue-600">
              Full Stack Developer
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600">
              {" "}
              Competitive Programmer
            </span>
            .
          </p>
          <p className="mb-4">
            Currently, I work as a{" "}
            <span className="font-semibold text-blue-600">
              Software Developer{" "}
            </span>
            at{" "}
            <span className="font-semibold text-blue-600">
              Synergy Interface Ltd.
            </span>{" "}
            Where I develop projects using
            <span className="font-semibold text-blue-600">
              {" "}
              ASP.NET Core
            </span>,{" "}
            <span className="font-semibold text-blue-600">React.js</span>, and{" "}
            <span className="font-semibold text-blue-600">.NET Web Forms</span>.
          </p>
          <p className="mb-4">
            I have a strong analytical mindset, enjoy problem-solving, and
            contribute meaningfully to a collaborative team.
          </p>
          <p className="mb-4">
            <strong>Skills:</strong> C#, ASP.NET Core (MVC, API), JavaScript,
            TypeScript, React.js, SQL Server, MongoDB, Entity Framework Core,
            and Git.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-6 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Projects</h3>
          <ul className="text-lg text-gray-700 space-y-3">
            <li>
              ✅{" "}
              <a
                href="https://shohug-enterprise.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                Shop ERP
              </a>{" "}
              - A comprehensive inventory management system.
            </li>
            <li>
              ✅{" "}
              <a
                href="https://github.com/mdrezaulkarim38/Daily-Deep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                Daily Deep
              </a>{" "}
              - Accounting system for single users.
            </li>
            <li>
              ✅{" "}
              <a
                href="https://github.com/mdrezaulkarim38/BillTracker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                Bill Tracker
              </a>{" "}
              - A system for managing and tracking payments.
            </li>
          </ul>
        </div>

        <div className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
          <p className="mb-4">
            Currently, I am also a student at{" "}
            <span className="font-semibold text-blue-600">
              Southeast University{" "}
            </span>
            focusing on Data Structures and Competitive Programming.
          </p>
          <p className="font-semibold">Less moody in real life. ✌️</p>
        </div>
      </div>
    </section>
  );
}

export default About;
