import { useEffect, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 text-center pt-25 pb-10">
      <div
        className={`max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I'm{" "}
          <span className="font-semibold text-blue-600">Rezaul Karim</span>.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I'm a{" "}
          <span className="font-semibold text-blue-600">
            Full Stack JS Developer
          </span>{" "}
          and a{" "}
          <span className="font-semibold text-blue-600">
            Competitive Programmer
          </span>
          .
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Currently, I work as a{" "}
          <span className="font-semibold text-blue-600">
            Software Developer at Synergy Interface Ltd.
          </span>{" "}
          where I develop projects using{" "}
          <span className="font-semibold text-blue-600">ASP.NET Core</span>,{" "}
          <span className="font-semibold text-blue-600">React.js</span>, and{" "}
          <span className="font-semibold text-blue-600">.NET Web Forms</span>.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I am a{" "}
          <span className="font-semibold text-blue-600">problem solver</span>{" "}
          who finds ways to work efficiently and make the work environment
          better for my teammates.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Currently, I am a{" "}
          <span className="font-semibold text-blue-600">
            student at Southeast University
          </span>{" "}
          focusing on Data Structures and Competitive Programming.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Less moody in real life. ✌️
        </p>
      </div>
    </section>
  );
}

export default About;
