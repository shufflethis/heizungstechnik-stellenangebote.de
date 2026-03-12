import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 text-white text-xl font-bold mb-4">
            <Wrench className="h-6 w-6 text-accent-500" />
            <span>Heizungstechnik-Jobs</span>
          </div>
          <p className="text-sm leading-relaxed">
            Die führende Plattform für Karrierechancen in der Heizungs-, Lüftungs- und Klimatechnik.
            Wir verbinden Fachkräfte mit den besten Arbeitgebern der Branche.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Für Bewerber</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/jobs" className="hover:text-accent-500 transition">Alle Stellenangebote</Link></li>
            <li><Link to="/karriere-ratgeber" className="hover:text-accent-500 transition">Karriere-Ratgeber</Link></li>
            <li><Link to="/gehaltsvergleich" className="hover:text-accent-500 transition">Gehaltsvergleich</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Für Arbeitgeber</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/stellenanzeige-schalten" className="hover:text-accent-500 transition">Stellenanzeige schalten</Link></li>
            <li><Link to="/recruiting-tipps" className="hover:text-accent-500 transition">Recruiting Tipps</Link></li>
            <li><Link to="/preise" className="hover:text-accent-500 transition">Preise & Konditionen</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} /> Schliemannstraße 23, 10437 Berlin</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@socialmediaventure.com</li>
            <li className="mt-4 pt-4 border-t border-brand-800">
               <Link to="/impressum" className="hover:text-white transition">Impressum & Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-brand-800 text-xs">
        &copy; {new Date().getFullYear()} heizungstechnik-stellenangebote.de - Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;