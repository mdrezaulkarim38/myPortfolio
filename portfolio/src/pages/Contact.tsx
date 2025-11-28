import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss modern web technologies? Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactItem
              icon={<FaEnvelope />}
              label="Email"
              value="mdrezaulkarim31295@gmail.com"
              href="mailto:mdrezaulkarim31295@gmail.com"
            />
            <ContactItem
              icon={<FaPhone />}
              label="Phone"
              value="+880 1234 567890"
              href="tel:+8801234567890"
            />
            <ContactItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Dhaka, Bangladesh"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Connect With Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SocialButton
              icon={<FaLinkedin />}
              href="https://www.linkedin.com/in/supermanshuvo/"
              label="LinkedIn"
              color="hover:bg-blue-600"
            />
            <SocialButton
              icon={<FaGithub />}
              href="https://github.com/mdrezaulkarim38"
              label="GitHub"
              color="hover:bg-slate-600"
            />
            <SocialButton
              icon={<FaFacebook />}
              href="https://www.facebook.com/supermanshuvo"
              label="Facebook"
              color="hover:bg-blue-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) => (
  <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors">
    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-blue-400 text-xl flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-slate-400 mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-white font-medium hover:text-blue-400 transition-colors break-all">
          {value}
        </a>
      ) : (
        <p className="text-white font-medium">{value}</p>
      )}
    </div>
  </div>
);

const SocialButton = ({ icon, href, label, color }: { icon: React.ReactNode, href: string, label: string, color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-3 px-6 py-4 bg-slate-700 ${color} text-white rounded-lg transition-all duration-300 group`}
  >
    <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
);

export default Contact;
