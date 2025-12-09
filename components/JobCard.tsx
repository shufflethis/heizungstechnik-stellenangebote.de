import React from 'react';
import { Job } from '../types';
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300 group">
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
        <div>
          <div className="flex gap-2 flex-wrap mb-2">
            {job.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold px-2 py-1 bg-brand-50 text-brand-700 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-slate-600 font-medium mb-4">{job.company}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
            <div className="flex items-center gap-1">
              <MapPin size={16} /> {job.location}
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={16} /> {job.type}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} /> {job.postedDate}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
           <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded text-sm whitespace-nowrap">
             {job.salary}
           </span>
           <button className="w-full md:w-auto mt-2 px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition flex items-center justify-center gap-1">
             Ansehen <ChevronRight size={16} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;