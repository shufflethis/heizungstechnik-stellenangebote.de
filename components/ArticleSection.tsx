import React from 'react';
import { ArticleSection as ArticleSectionType } from '../types';

interface Props {
  data: ArticleSectionType;
  className?: string;
}

const ArticleSection: React.FC<Props> = ({ data, className = "" }) => {
  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-6 border-b pb-2 border-slate-200">
        {data.title}
      </h2>
      <div 
        className="text-slate-700 leading-relaxed text-lg"
        dangerouslySetInnerHTML={{ __html: data.content }} 
      />
    </div>
  );
};

export default ArticleSection;