import React from 'react';
import { Search, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import JobCard from '../components/JobCard';
import ArticleSection from '../components/ArticleSection';
import { MOCK_JOBS, SEO_CONTENT } from '../constants';
import { Link } from 'react-router-dom';

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

      {/* JOB LISTINGS PREVIEW */}
      <section className="bg-slate-50 py-16 md:py-24">
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