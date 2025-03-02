const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          
          {/* Left Section - Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Prateek Vishwakarma. All rights reserved.
          </p>
  
          {/* Center Section - Navigation Links */}
          <ul className="flex space-x-6 text-sm mt-4 md:mt-0">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
  
          {/* Right Section - Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              🔗 GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              🔗 LinkedIn
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              🔗 Twitter
            </a>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;