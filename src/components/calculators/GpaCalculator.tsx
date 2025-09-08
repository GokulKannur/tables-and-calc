"use client";

import { useState } from 'react';

const gradePoints: { [key: string]: number } = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0,
};

export default function GpaCalculator() {
  const [courses, setCourses] = useState([{ grade: 'A', credits: '3' }]);
  const [gpa, setGpa] = useState<string | null>(null);

  const handleCourseChange = (index: number, field: 'grade' | 'credits', value: string) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: 'A', credits: '3' }]);
  };

  const removeCourse = (index: number) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach(course => {
      const credits = parseFloat(course.credits);
      const points = gradePoints[course.grade];
      if (!isNaN(credits) && credits > 0 && points !== undefined) {
        totalPoints += points * credits;
        totalCredits += credits;
      }
    });
    const result = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
    setGpa(result);
  };

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm space-y-6">
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder={`Course ${index + 1} (Optional)`}
              className="flex-1 p-2 border border-slate-300 rounded-md"
            />
            <select 
              value={course.grade} 
              onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
              className="p-2 border border-slate-300 rounded-md bg-slate-50"
            >
              {Object.keys(gradePoints).map(grade => <option key={grade} value={grade}>{grade}</option>)}
            </select>
            <input 
              type="number" 
              value={course.credits}
              onChange={(e) => handleCourseChange(index, 'credits', e.target.value)}
              placeholder="Credits" 
              className="w-24 p-2 border border-slate-300 rounded-md"
            />
            <button onClick={() => removeCourse(index)} className="text-red-500 hover:text-red-700">✕</button>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={addCourse} className="w-full p-3 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300">Add Course</button>
        <button onClick={calculateGpa} className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Calculate GPA</button>
      </div>
      {gpa && (
        <div className="text-center pt-4 border-t">
          <p className="text-slate-600">Your GPA is:</p>
          <p className="text-5xl font-bold text-blue-600">{gpa}</p>
        </div>
      )}
    </div>
  );
}