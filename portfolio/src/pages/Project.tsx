import BackgroundImage from "./../assets/backgroundImage.jpg";
import SmartImage from "./../assets/smart-life-insurance.png";
import AmarPolicyImage from "./../assets/AmarPolicy.png";
import { FaMoneyBillWave, FaFileInvoiceDollar, FaBoxes } from "react-icons/fa";

const projects = [
  {
    title: "Smart Life Insurance",
    description:
      "Developed and maintained modules for FA, UM, BM, and the Customer Policy. Automated premium calculation and added dynamic reporting.",
    image: SmartImage,
  },
  {
    title: "Amar Policy",
    description:
      "An AI-powered insurance policy management system for users and administrators.",
    image: AmarPolicyImage,
  },
  {
    title: "Bill Manage",
    description:
      "Designed a robust billing system with multiple reporting and filtering features.",
    icon: <FaMoneyBillWave className="text-blue-600 text-6xl" />,
  },
  {
    title: "Accounting Software",
    description:
      "Built a modular accounting solution to simplify financial management.",
    icon: <FaFileInvoiceDollar className="text-green-600 text-6xl" />,
  },
  {
    title: "Inventory App",
    description:
      "Developed an intuitive inventory management system with improved UI and reporting features.",
    icon: <FaBoxes className="text-yellow-600 text-6xl" />,
  },
];

function Project() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center pt-20 pb-10 px-4"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl w-full bg-white bg-opacity-90 rounded-lg shadow-xl p-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Projects</h2>
        <p>These are the projects I have worked on for my company. Each project aims to solve a specific problem and improve efficiency.</p>
        <hr />

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain  mb-4"
                />
              ) : (
                project.icon
              )}
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
