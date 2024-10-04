"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';

export default function PhotoUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement file upload and API call to stylize photo
    toast({
      title: "Success",
      description: "Photo uploaded and processing started.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <Input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
        </label>
      </div>
      <Textarea
        placeholder="Describe the mood for the music..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="min-h-[100px] resize-none"
      />
      <Button type="submit" className="w-full">
        <Upload className="w-4 h-4 mr-2" />
        Upload and Stylize
      </Button>
    </form>
  );
}