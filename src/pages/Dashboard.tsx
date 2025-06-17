
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { usePapers } from '@/hooks/usePapers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Upload, FileText, Shield } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const { semesterData, addPaper } = usePapers();
  const navigate = useNavigate();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    semester: '',
    subjectCode: '',
    paperType: '',
    paperName: '',
    downloadUrl: '',
    year: new Date().getFullYear().toString()
  });

  // Check if user is admin
  const isAdmin = user?.email?.includes('admin') || false;

  // Redirect non-admin users
  React.useEffect(() => {
    if (user && !isAdmin) {
      navigate('/');
      toast.error('Access denied. Admin privileges required.');
    }
  }, [user, isAdmin, navigate]);

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Restricted</h2>
          <p className="text-gray-600">Admin privileges required to access this page.</p>
        </Card>
      </div>
    );
  }

  // Get all subjects with their semester info for the dropdown
  const allSubjects = Object.entries(semesterData).flatMap(([semester, subjects]) =>
    subjects.map(subject => ({ ...subject, semester }))
  );

  // Get papers count
  const totalPapers = Object.values(semesterData).reduce((total, subjects) => {
    return total + subjects.reduce((subjectTotal, subject) => {
      return subjectTotal + 
        subject.papers.first_ia.length + 
        subject.papers.second_ia.length + 
        subject.papers.third_ia.length + 
        subject.papers.final.length;
    }, 0);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.semester || !formData.subjectCode || !formData.paperType || !formData.paperName || !formData.downloadUrl) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      addPaper(formData.semester, formData.subjectCode, formData.paperType, {
        paper_name: formData.paperName,
        download_url: formData.downloadUrl,
        paper_type: formData.paperType,
        year: parseInt(formData.year)
      });

      setFormData({
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

  // Get subjects for selected semester
  const subjectsForSemester = formData.semester ? semesterData[formData.semester] || [] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600">Manage question papers for all semesters - changes reflect instantly on the website</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Papers</p>
                  <p className="text-2xl font-bold">{totalPapers}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Subjects</p>
                  <p className="text-2xl font-bold">{allSubjects.length}</p>
                </div>
                <Upload className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Semesters</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Shield className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Question Papers Management</CardTitle>
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
                      <Label htmlFor="semester">Semester *</Label>
                      <Select value={formData.semester} onValueChange={(value) => setFormData({...formData, semester: value, subjectCode: ''})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(semesterData).map(semester => (
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
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Papers added through this dashboard will appear instantly on the main website.</p>
              <p className="text-sm mt-2">Use the "Add Paper" button above to start adding question papers.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
