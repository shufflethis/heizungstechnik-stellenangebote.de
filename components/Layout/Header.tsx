import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-brand-900 text-2xl font-bold">
          <div className="bg-brand-100 p-2 rounded-lg">
             <Wrench className="h-6 w-6 text-brand-600" />
          </div>
          <span className="hidden md:inline">Heizungstechnik<span className="text-accent-600">Jobs</span></span>
          <span className="md:hidden">HT<span className="text-accent-600">Jobs</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-600 hover:text-brand-600 font-medium">Startseite</Link>
          <Link to="/jobs" className="text-slate-600 hover:text-brand-600 font-medium">Stellen finden</Link>
          <Link to="/arbeitgeber" className="text-slate-600 hover:text-brand-600 font-medium">Für Arbeitgeber</Link>
          <Link to="/jobs" className="px-5 py-2.5 bg-accent-600 hover:bg-accent-700 text-white rounded-full font-semibold transition shadow-md">
            Jetzt bewerben
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-600 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-lg font-medium text-slate-700" onClick={() => setIsOpen(false)}>Startseite</Link>
            <Link to="/jobs" className="text-lg font-medium text-slate-700" onClick={() => setIsOpen(false)}>Stellen finden</Link>
            <Link to="/arbeitgeber" className="text-lg font-medium text-slate-700" onClick={() => setIsOpen(false)}>Für Arbeitgeber</Link>
            <Link to="/impressum" className="text-lg font-medium text-slate-700" onClick={() => setIsOpen(false)}>Impressum</Link>
            <Link to="/jobs" className="w-full text-center py-3 bg-accent-600 text-white rounded-lg font-bold" onClick={() => setIsOpen(false)}>
              Jetzt bewerben
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;