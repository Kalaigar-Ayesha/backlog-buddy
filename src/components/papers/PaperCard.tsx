
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

interface Paper {
  id: string;
  paper_name: string;
  download_url: string;
  paper_type: string;
  year: number;
}

interface PaperCardProps {
  title: string;
  papers: Paper[];
  color: string;
}

const PaperCard = ({ title, papers, color }: PaperCardProps) => {
  const handleDownload = (url: string, paperName: string) => {
    window.open(url, '_blank');
    toast.success(`Opening ${paperName}`);
  };

  return (
    <div className={`p-4 rounded-lg border ${color}`}>
      <h4 className="font-semibold text-gray-800 mb-3 text-base">
        {title}
      </h4>
      <div className="space-y-2">
        {papers.length > 0 ? (
          papers.map((paper, paperIndex) => (
            <Button
              key={paperIndex}
              variant="outline"
              size="sm"
              className="w-full justify-start text-left text-sm hover:bg-white hover:border-blue-300 transition-all duration-200 transform hover:scale-[1.02] p-3 h-auto"
              onClick={() => handleDownload(paper.download_url, paper.paper_name)}
            >
              <Download className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">{paper.paper_name}</span>
            </Button>
          ))
        ) : (
          <div className="text-sm text-gray-500 py-4 text-center">
            No papers available
          </div>
        )}
      </div>
    </div>
  );
};

export default PaperCard;
