import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Shittu Victor. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-dark transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-dark transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:victorshittu@gmail.com"
              className="text-gray-500 hover:text-purple-dark transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
