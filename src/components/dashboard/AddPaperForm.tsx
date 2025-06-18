
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { BranchData } from '@/types/papers';

interface AddPaperFormProps {
  branchData: BranchData;
  onAddPaper: (branch: string, semester: string, subjectCode: string, paperType: string, paper: any) => void;
}

const AddPaperForm = ({ branchData, onAddPaper }: AddPaperFormProps) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    branch: '',
    semester: '',
    subjectCode: '',
    paperType: '',
    paperName: '',
    downloadUrl: '',
    year: new Date().getFullYear().toString()
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.branch || !formData.semester || !formData.subjectCode || !formData.paperType || !formData.paperName || !formData.downloadUrl) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      onAddPaper(formData.branch, formData.semester, formData.subjectCode, formData.paperType, {
        paper_name: formData.paperName,
        download_url: formData.downloadUrl,
        paper_type: formData.paperType,
        year: parseInt(formData.year)
      });

      setFormData({
        branch: '',
        semester: '',
        subjectCode: '',
        paperType: '',
        paperName: '',
        downloadUrl: '',
        year: new Date().getFullYear().toString()
      });
      setIsAddDialogOpen(false);
      toast.success('Question paper added successfully! Changes are live on the website.');
    } catch (error) {
      toast.error('Failed to add paper. Please try again.');
    }
  };

  // Get semesters for selected branch
  const semestersForBranch = formData.branch ? Object.keys(branchData[formData.branch] || {}) : [];
  
  // Get subjects for selected branch and semester
  const subjectsForSemester = formData.branch && formData.semester ? 
    branchData[formData.branch]?.[formData.semester] || [] : [];

  return (
    <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Paper
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Question Paper</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="branch">Branch *</Label>
            <Select value={formData.branch} onValueChange={(value) => setFormData({...formData, branch: value, semester: '', subjectCode: ''})}>
              <SelectTrigger>
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(branchData).map(branch => (
                  <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="semester">Semester *</Label>
            <Select value={formData.semester} onValueChange={(value) => setFormData({...formData, semester: value, subjectCode: ''})}>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {semestersForBranch.map(semester => (
                  <SelectItem key={semester} value={semester}>{semester}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="subjectCode">Subject *</Label>
            <Select value={formData.subjectCode} onValueChange={(value) => setFormData({...formData, subjectCode: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjectsForSemester.map(subject => (
                  <SelectItem key={subject.code} value={subject.code}>
                    {subject.code} - {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="paperType">Paper Type *</Label>
            <Select value={formData.paperType} onValueChange={(value) => setFormData({...formData, paperType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select paper type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first_ia">First IA</SelectItem>
                <SelectItem value="second_ia">Second IA</SelectItem>
                <SelectItem value="third_ia">Third IA</SelectItem>
                <SelectItem value="final">Final Exam</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="paperName">Paper Name *</Label>
            <Input
              id="paperName"
              value={formData.paperName}
              onChange={(e) => setFormData({...formData, paperName: e.target.value})}
              placeholder="e.g., First IA 2023 - Calculus"
            />
          </div>

          <div>
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              type="number"
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
            />
          </div>

          <div>
            <Label htmlFor="downloadUrl">Download URL *</Label>
            <Input
              id="downloadUrl"
              value={formData.downloadUrl}
              onChange={(e) => setFormData({...formData, downloadUrl: e.target.value})}
              placeholder="https://drive.google.com/..."
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Add Paper
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPaperForm;
