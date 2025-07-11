import React from 'react';
import { Video, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.webp" alt="LeoMedia logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('howitworks')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Ako to funguje
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Cenník
            </button>
            <button
              onClick={() => scrollToSection('examples')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Ukážky
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium"
            >
              Chcem ponuku
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('howitworks')}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Ako to funguje
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Cenník
              </button>
              <button
                onClick={() => scrollToSection('examples')}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Ukážky
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium w-fit"
              >
                Chcem ponuku
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;