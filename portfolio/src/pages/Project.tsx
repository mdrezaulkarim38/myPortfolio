import SmartImage from "./../assets/smart-life-insurance.png";
import AmarPolicyImage from "./../assets/AmarPolicy.png";
import { FaMoneyBillWave, FaFileInvoiceDollar, FaBoxes, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Life Insurance",
    description:
      "Developed and maintained modules for FA, UM, BM, and the Customer Policy. Automated premium calculation and added dynamic reporting.",
    image: SmartImage,
    tags: ["ASP.NET Core", "SQL Server", "React"],
  },
  {
    title: "Amar Policy",
    description:
      "An AI-powered insurance policy management system for users and administrators.",
    image: AmarPolicyImage,
    tags: ["AI Integration", "Web API", "React"],
  },
  {
    title: "Bill Manage",
    description:
      "Designed a robust billing system with multiple reporting and filtering features.",
    icon: <FaMoneyBillWave className="text-blue-400 text-6xl" />,
    tags: ["Finance", "Reporting", "Automation"],
  },
  {
    title: "Accounting Software",
    description:
      "Built a modular accounting solution to simplify financial management.",
    icon: <FaFileInvoiceDollar className="text-green-400 text-6xl" />,
    tags: ["Accounting", "Database Design"],
  },
  {
    title: "Inventory App",
    description:
      "Developed an intuitive inventory management system with improved UI and reporting features.",
    icon: <FaBoxes className="text-yellow-400 text-6xl" />,
    tags: ["Inventory", "UI/UX"],
  },
];

function Project() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A selection of projects I've worked on, ranging from enterprise solutions to specialized tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700 group"
            >
              <div className="h-48 overflow-hidden bg-slate-700 flex items-center justify-center relative">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Details <FaExternalLinkAlt size={14} />
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="transform transition-transform duration-500 group-hover:scale-110">
                    {project.icon}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

