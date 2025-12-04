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
    <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm space-y-6">
      <div className="space-y-3">
        {courses.map((course, index) => (
          <div key={index} className="flex flex-wrap items-center gap-2 md:gap-4">
            <input
              type="text"
              placeholder={`Course ${index + 1}`}
              className="flex-1 min-w-[120px] p-2 border rounded-md bg-background"
            />
            <select
              value={course.grade}
              onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
              className="p-2 border rounded-md bg-background"
            >
              {Object.keys(gradePoints).map(grade => <option key={grade} value={grade}>{grade}</option>)}
            </select>
            <input
              type="number"
              value={course.credits}
              onChange={(e) => handleCourseChange(index, 'credits', e.target.value)}
              placeholder="Credits"
              className="w-20 p-2 border rounded-md bg-background"
            />
            <button onClick={() => removeCourse(index)} className="text-destructive hover:opacity-70 p-1">✕</button>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={addCourse} className="flex-1 p-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80">Add Course</button>
        <button onClick={calculateGpa} className="flex-1 p-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90">Calculate GPA</button>
      </div>
      {gpa && (
        <div className="text-center pt-4 border-t">
          <p className="text-muted-foreground text-sm">Your GPA is:</p>
          <p className="text-5xl font-bold text-primary">{gpa}</p>
        </div>
      )}
    </div>
  );
}