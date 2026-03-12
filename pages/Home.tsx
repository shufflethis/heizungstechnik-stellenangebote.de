import React from 'react';
import { Search, MapPin, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import JobCard from '../components/JobCard';
import ArticleSection from '../components/ArticleSection';
import GermanCitiesGeo from '../components/geo/GermanCitiesGeo';
import { MOCK_JOBS, SEO_CONTENT } from '../constants';
import { Link } from 'react-router-dom';

const FAQ_ITEMS = [
  {
    question: 'Welche Berufe gibt es in der Heizungstechnik?',
    answer: 'Die Heizungstechnik bietet vielfaeltige Berufsbilder: Anlagenmechaniker fuer Sanitaer-, Heizungs- und Klimatechnik (SHK), Kundendiensttechniker, Heizungsbaumeister, Projektleiter, Energieberater, Waermepumpen-Techniker, Servicetechniker und viele mehr. Mit dem Wandel zur Waermewende entstehen laufend neue Spezialisierungen.',
  },
  {
    question: 'Wie viel verdient man in der Heizungstechnik?',
    answer: 'Die Gehaelter variieren je nach Position und Region. Ein Anlagenmechaniker SHK verdient durchschnittlich 35.000 bis 48.000 Euro jaehrlich. Erfahrene Kundendiensttechniker erreichen 45.000 bis 65.000 Euro. Meister und Projektleiter koennen mit 55.000 bis 75.000 Euro und mehr rechnen. Zuschlaege fuer Notdienst und Montage kommen haeufig hinzu.',
  },
  {
    question: 'Welche Qualifikationen brauche ich fuer Jobs in der Heizungstechnik?',
    answer: 'Grundvoraussetzung ist in der Regel eine abgeschlossene Ausbildung als Anlagenmechaniker SHK oder eine vergleichbare Qualifikation. Fuer spezialisierte Positionen sind Zusatzqualifikationen wie der Kaelteschein (fuer Waermepumpen), der Meistertitel oder eine Weiterbildung zum Energieberater von Vorteil. Quereinsteiger mit handwerklichem Geschick haben ebenfalls gute Chancen.',
  },
  {
    question: 'Ist die Heizungstechnik ein zukunftssicherer Beruf?',
    answer: 'Ja, die Heizungstechnik gehoert zu den zukunftssichersten Branchen ueberhaupt. Durch die gesetzlich vorgeschriebene Waermewende, das Gebaeudeenergiegesetz (GEG) und den massiven Ausbau erneuerbarer Heizsysteme wie Waermepumpen wird der Bedarf an Fachkraeften in den naechsten Jahrzehnten stark steigen. Der Fachkraeftemangel sorgt fuer hervorragende Jobaussichten.',
  },
  {
    question: 'Wie finde ich den passenden Job in der Heizungstechnik?',
    answer: 'Auf heizungstechnik-stellenangebote.de finden Sie spezialisierte Stellenangebote aus der gesamten SHK-Branche. Nutzen Sie die Suchfilter nach Ort, Berufsfeld und Beschaeftigungsart. Melden Sie sich fuer den kostenlosen Job-Alert an, um neue passende Stellen direkt per E-Mail zu erhalten.',
  },
  {
    question: 'Kann ich auch als Quereinsteiger in der Heizungstechnik arbeiten?',
    answer: 'Ja, Quereinsteiger sind in der Heizungstechnik willkommen - besonders bei Helfertaetigkeiten, in der Montage oder im Vertrieb. Viele Unternehmen bieten interne Schulungen und Qualifizierungsprogramme an. Wer handwerkliches Geschick und technisches Verstaendnis mitbringt, hat gute Einstiegschancen. Langfristig empfiehlt sich eine formale Qualifikation.',
  },
];

const FAQItem: React.FC<{ item: typeof FAQ_ITEMS[0] }> = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
        <ChevronDown className={`flex-shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} size={20} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-brand-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://picsum.photos/1920/1080?grayscale"
              alt="Heizungskeller Modern"
              className="w-full h-full object-cover"
            />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Jobs für die <span className="text-accent-500">Wärmewende</span>.
              <br />Karriere in der Heizungstechnik.
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl">
              Finde Top-Arbeitgeber in der SHK-Branche oder rekrutiere qualifizierte Fachkräfte für dein Unternehmen.
            </p>

            {/* Search Box */}
            <div className="bg-white p-4 rounded-xl shadow-2xl flex flex-col md:flex-row gap-4 max-w-4xl">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Jobtitel, Begriff (z.B. Wärmepumpe)"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-slate-800"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3.5 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Stadt oder PLZ"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-slate-800"
                />
              </div>
              <button className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                Jobs finden
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-300">
              <span>Beliebt:</span>
              <span className="bg-white/10 px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition">Anlagenmechaniker SHK</span>
              <span className="bg-white/10 px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition">Meister Heizung</span>
              <span className="bg-white/10 px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition">Wärmepumpen-Techniker</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / TRUST SECTION */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-600">2.500+</div>
              <div className="text-slate-500 text-sm mt-1">Aktuelle Stellen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">500+</div>
              <div className="text-slate-500 text-sm mt-1">Top Arbeitgeber</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">45k €</div>
              <div className="text-slate-500 text-sm mt-1">Ø Einstiegsgehalt</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">100%</div>
              <div className="text-slate-500 text-sm mt-1">Spezialisiert auf SHK</div>
            </div>
        </div>
      </section>

      {/* JOB LISTINGS PREVIEW - Prominent, shown early */}
      <section className="bg-slate-50 py-12 md:py-24 order-first md:order-none">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Aktuelle Top-Jobs</h2>
              <p className="text-slate-600 mt-2">Die neuesten Stellenangebote aus der Heizungsbranche</p>
            </div>
            <Link to="/jobs" className="hidden md:flex items-center text-brand-600 font-semibold hover:text-brand-700">
              Alle Jobs ansehen <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_JOBS.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link to="/jobs" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700">
              Alle Jobs ansehen <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* GEO SEO - German Cities */}
      <GermanCitiesGeo />

      {/* EMPLOYER CTA */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 relative min-h-[300px]">
               <img
                src="https://picsum.photos/800/600"
                alt="Team Meeting Heizungsfirma"
                className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Für Arbeitgeber: Finden Sie die besten Fachkräfte</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Zugang zu tausenden qualifizierten Anlagenmechanikern und Meistern.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Spezialisierte Plattform: Keine Streuverluste wie bei allgemeinen Jobbörsen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Employer Branding: Präsentieren Sie sich als moderner Arbeitgeber.</span>
                </li>
              </ul>
              <Link to="/arbeitgeber" className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-lg text-center transition">
                Stellenanzeige schalten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENSIVE SEO CONTENT SECTION */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Wissen & Karriere in der Heizungstechnik</h2>
              <p className="text-xl text-slate-600">Alles was Sie über Berufe, Technologien und den Markt wissen müssen.</p>
           </div>

           <div className="space-y-16">
             {SEO_CONTENT.map((section, idx) => (
               <ArticleSection key={idx} data={section} />
             ))}
           </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Häufig gestellte Fragen</h2>
            <p className="text-xl text-slate-600">Antworten auf die wichtigsten Fragen rund um Jobs in der Heizungstechnik</p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <FAQItem key={idx} item={item} />
            ))}
          </div>

          {/* FAQ Schema Markup */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }) }} />
        </div>
      </section>

      {/* CAREER INFO SECTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Karriere in der Heizungstechnik</h2>
            <p className="text-xl text-slate-600">Ihr Weg zu einer erfolgreichen Karriere in der Waermewende</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
              <div className="text-3xl font-bold text-brand-600 mb-2">1.</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ausbildung & Einstieg</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Starten Sie mit einer Ausbildung zum Anlagenmechaniker SHK (3,5 Jahre). Auch Quereinsteiger mit handwerklicher Erfahrung finden attraktive Einstiegsmoeglichkeiten in der Branche.
              </p>
            </div>
            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
              <div className="text-3xl font-bold text-brand-600 mb-2">2.</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Spezialisierung</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Qualifizieren Sie sich weiter: Waermepumpen-Techniker, Kaelteschein (Kategorie I), Energieberater oder Sachverstaendiger. Jede Spezialisierung steigert Ihren Marktwert erheblich.
              </p>
            </div>
            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
              <div className="text-3xl font-bold text-brand-600 mb-2">3.</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Meister & Fuehrung</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Der Meistertitel oeffnet Tueren zur Projektleitung, Betriebsfuehrung oder Selbststaendigkeit. Alternativ bieten grosse Unternehmen Management-Karrierepfade fuer erfahrene Fachkraefte.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Warum jetzt in die Heizungstechnik einsteigen?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Hohe Jobsicherheit durch gesetzliche Waermewende</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Ueberdurchschnittliche Gehaelter im Handwerk</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Sinnvolle Arbeit fuer den Klimaschutz</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Vielfaeltige Karrierewege und Spezialisierungen</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Starke Nachfrage nach Fachkraeften</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Modernste Technologien und digitale Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-brand-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Keinen Job mehr verpassen?</h2>
          <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
            Melden Sie sich für unseren Job-Alert an und erhalten Sie die neuesten Stellenangebote aus Ihrer Region direkt per E-Mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-500 w-full"
            />
            <button className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap transition">
              Kostenlos anmelden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
