import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 187, slug: 'berlin' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 143, slug: 'hamburg' },
  { name: 'Muenchen', region: 'Bayern', jobs: 198, slug: 'muenchen' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 112, slug: 'koeln' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 96, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 134, slug: 'stuttgart' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 78, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 65, slug: 'leipzig' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 54, slug: 'dortmund' },
  { name: 'Dresden', region: 'Sachsen', jobs: 58, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 72, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 63, slug: 'nuernberg' },
  { name: 'Bremen', region: 'Bremen', jobs: 47, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 41, slug: 'essen' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 38, slug: 'freiburg' },
  { name: 'Erfurt', region: 'Thueringen', jobs: 34, slug: 'erfurt' },
  { name: 'Magdeburg', region: 'Sachsen-Anhalt', jobs: 29, slug: 'magdeburg' },
  { name: 'Muenster', region: 'Nordrhein-Westfalen', jobs: 36, slug: 'muenster' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 22, slug: 'rostock' },
  { name: 'Augsburg', region: 'Bayern', jobs: 31, slug: 'augsburg' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Heizungstechnik-Jobs in deutschen Staedten</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Finden Sie Stellenangebote in der Heizungstechnik in Ihrer Naehe. Wir bieten Jobs in allen grossen Staedten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <NavLink
              key={city.slug}
              to={`/jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all group"
            >
              <MapPin className="h-4 w-4 text-brand-500 flex-shrink-0 group-hover:text-brand-600" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800 text-sm block truncate">{city.name}</span>
                <span className="text-xs text-slate-400">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">Heizungstechnik-Stellenangebote in ganz Deutschland</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Deutschland erlebt eine beispiellose Nachfrage nach Fachkraeften in der Heizungstechnik. Die Waermewende, getrieben durch das Gebaeudeenergiegesetz (GEG) und steigende Klimaschutzziele, sorgt dafuer, dass in jeder Region qualifizierte Anlagenmechaniker, Servicetechniker und Meister im SHK-Bereich gesucht werden.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Besonders gefragt sind Fachkraefte in den Grossstaedten Berlin, Muenchen, Hamburg, Stuttgart und Koeln, wo zahlreiche Sanierungsprojekte und Neubauten den Bedarf an Waermepumpen-Technikern, Heizungsbauern und Energieberatern in die Hoehe treiben. Auch in mittelgrossen Staedten wie Erfurt, Magdeburg und Freiburg waechst der Arbeitsmarkt stetig.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ob Anlagenmechaniker SHK, Kundendiensttechniker, Projektleiter Heizungstechnik oder Energieberater - auf heizungstechnik-stellenangebote.de finden Sie passende Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um Heizungstechnik-Jobs in Ihrer Naehe zu entdecken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
