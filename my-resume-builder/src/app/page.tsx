'use client'
// pages/index.tsx
import React, { useState } from 'react';
import Button from './components/buttons/button';
import Input from './components/input/input';
import Textarea from './components/textarea/textarea';
import Image from 'next/image';


const ResumeBuilder: React.FC = () => {
  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Image State
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Skills and Work Experience State
  const [skills, setSkills] = useState<string[]>([]);
  const [workExperience, setWorkExperience] = useState<{ company: string; details: string }[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');
  const [newExperience, setNewExperience] = useState<{ company: string; details: string }>({ company: '', details: '' });

  // Personal Information Update Function
  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Image Upload Handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));  // Generate preview URL
    }
  };

  // Skills Functions
  const addSkill = () => {
    if (newSkill) setSkills([...skills, newSkill]);
    setNewSkill('');
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Work Experience Functions
  const addExperience = () => {
    setWorkExperience([...workExperience, newExperience]);
    setNewExperience({ company: '', details: '' });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Resume Builder</h1>

      {/* Personal Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <Input
          value={personalInfo.name}
          onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
          placeholder="Full Name"
        />
        <Input
          value={personalInfo.email}
          onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
          placeholder="Email Address"
        />
        <Input
          value={personalInfo.phone}
          onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
          placeholder="Phone Number"
        />
        
        {/* Image Upload */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Upload Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <Input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Add a skill" />
        <Button onClick={addSkill}>Add Skill</Button>
        <ul className="mt-4">
          {skills.map((skill, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              {skill}
              <Button onClick={() => removeSkill(index)}>Remove</Button>
            </li>
          ))}
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <Input
          value={newExperience.company}
          onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
          placeholder="Company"
        />
        <Textarea
          value={newExperience.details}
          onChange={(e) => setNewExperience({ ...newExperience, details: e.target.value })}
          placeholder="Experience Details"
        />
        <Button onClick={addExperience}>Add Experience</Button>
        <ul className="mt-4">
          {workExperience.map((exp, index) => (
            <li key={index} className="border p-4 rounded mb-2">
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Details:</strong> {exp.details}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Display the Complete Resume */}
      <section className="border-t pt-4 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
        
        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-4">
            <Image src={imagePreview} alt="Profile" width={128} height={128} className="rounded-full" />
          </div>
        )}

        {/* Personal Information Preview */}
        <div className="mb-4">
          <h3 className="text-xl font-bold">{personalInfo.name}</h3>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
        </div>

        {/* Skills Preview */}
        {skills.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc pl-6">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Work Experience Preview */}
        {workExperience.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold">Work Experience</h3>
            <ul className="space-y-4">
              {workExperience.map((exp, index) => (
                <li key={index} className="border p-4 rounded">
                  <p><strong>Company:</strong> {exp.company}</p>
                  <p><strong>Details:</strong> {exp.details}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default ResumeBuilder;
