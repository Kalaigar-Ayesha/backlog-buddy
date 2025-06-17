
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Upload, FileText } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';

const Dashboard = () => {
  const { user } = useAuth();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    semester: '',
    subject: '',
    paperType: '',
    paperName: '',
    downloadUrl: '',
    year: new Date().getFullYear().toString()
  });

  // Mock papers data for display
  const [papers, setPapers] = useState([
    { id: 1, semester: 1, subject: 'Mathematics I', paperType: 'first_ia', paperName: 'First IA 2023', year: 2023, uploadedBy: 'Admin' },
    { id: 2, semester: 1, subject: 'Physics', paperType: 'final', paperName: 'Final Exam 2023', year: 2023, uploadedBy: 'John Doe' },
    { id: 3, semester: 2, subject: 'Programming in C', paperType: 'second_ia', paperName: 'Second IA 2023', year: 2023, uploadedBy: 'Admin' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.semester || !formData.subject || !formData.paperType || !formData.paperName || !formData.downloadUrl) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock adding paper
    const newPaper = {
      id: papers.length + 1,
      semester: parseInt(formData.semester),
      subject: formData.subject,
      paperType: formData.paperType,
      paperName: formData.paperName,
      year: parseInt(formData.year),
      uploadedBy: user?.email || 'Anonymous'
    };

    setPapers([...papers, newPaper]);
    setFormData({
      semester: '',
      subject: '',
      paperType: '',
      paperName: '',
      downloadUrl: '',
      year: new Date().getFullYear().toString()
    });
    setIsAddDialogOpen(false);
    toast.success('Question paper added successfully!');
  };

  const handleDelete = (id: number) => {
    setPapers(papers.filter(paper => paper.id !== id));
    toast.success('Paper deleted successfully');
  };

  const subjects = [
    'Mathematics I', 'Mathematics II', 'Physics', 'Chemistry', 'Engineering Graphics',
    'Basic Electronics', 'Engineering Mechanics', 'Programming in C', 'Material Science',
    'Data Structures', 'Computer Organization', 'Discrete Mathematics', 'Algorithms',
    'Database Systems', 'Software Engineering', 'Computer Networks', 'Web Technologies',
    'Mobile Computing', 'Machine Learning', 'Cloud Computing', 'Project Work', 'Industry Internship'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Question Papers Dashboard</h1>
          <p className="text-gray-600">Manage and upload question papers for all semesters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Papers</p>
                  <p className="text-2xl font-bold">{papers.length}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">This Month</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Upload className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Question Papers</CardTitle>
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
                      <Select value={formData.semester} onValueChange={(value) => setFormData({...formData, semester: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map(sem => (
                            <SelectItem key={sem} value={sem.toString()}>{sem}st Semester</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map(subject => (
                            <SelectItem key={subject} value={subject}>{subject}</SelectItem>
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
                        placeholder="e.g., First IA 2023"
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Semester</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Paper Name</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Uploaded By</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {papers.map((paper) => (
                  <TableRow key={paper.id}>
                    <TableCell>{paper.semester}</TableCell>
                    <TableCell>{paper.subject}</TableCell>
                    <TableCell className="capitalize">{paper.paperType.replace('_', ' ')}</TableCell>
                    <TableCell>{paper.paperName}</TableCell>
                    <TableCell>{paper.year}</TableCell>
                    <TableCell>{paper.uploadedBy}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDelete(paper.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
