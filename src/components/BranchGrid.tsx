import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { usePapers } from '@/hooks/usePapers';

const BranchGrid = () => {
  const navigate = useNavigate();
  const { branchData } = usePapers();

  const handleBranchClick = (branch: string) => {
    navigate(`/branch/${encodeURIComponent(branch)}`);
  };

  return (
    <section className="py-16 px-4 animate-fadeIn">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Select Your Branch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your branch to access semester-wise and subject-wise question papers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Object.entries(branchData).map(([branch, semesters]) => {
            const totalSemesters = Object.keys(semesters).length;
            
            return (
              <div
                key={branch}
                onClick={() => handleBranchClick(branch)}
                className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200 overflow-hidden aspect-square flex flex-col"
              >
                {/* Book-like design with gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-b from-blue-700 to-purple-800 shadow-lg"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center h-full text-white">
                  <BookOpen className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-lg font-bold mb-2 leading-tight">
                    {branch}
                  </h3>
                  
                  <div className="text-sm opacity-90 bg-white/20 px-3 py-1 rounded-full">
                    {totalSemesters} semesters
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchGrid;