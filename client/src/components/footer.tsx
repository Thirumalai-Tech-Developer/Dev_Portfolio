import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white/60">
            © 2024 Thirumalai G. Built with passion and dedication.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/thirumalai-g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Thirumalai-Tech-Developer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
