// src/components/calculators/AgeCalculator.tsx
"use client";

import { useState, useEffect } from 'react';

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  totalHours: number;
  totalMinutes: number;
  daysUntilBirthday: number;
  nextBirthday: string;
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
  const [age, setAge] = useState<AgeResult | null>(null);

  useEffect(() => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const target = new Date(targetDate);

    if (birth > target) {
      setAge(null);
      return;
    }

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;

    const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < target) {
      nextBirthday.setFullYear(target.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24));

    setAge({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
      totalHours,
      totalMinutes,
      daysUntilBirthday,
      nextBirthday: nextBirthday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    });
  }, [birthDate, targetDate]);

  const zodiacSigns = [
    { name: 'Capricorn', start: [12, 22], end: [1, 19], emoji: '♑' },
    { name: 'Aquarius', start: [1, 20], end: [2, 18], emoji: '♒' },
    { name: 'Pisces', start: [2, 19], end: [3, 20], emoji: '♓' },
    { name: 'Aries', start: [3, 21], end: [4, 19], emoji: '♈' },
    { name: 'Taurus', start: [4, 20], end: [5, 20], emoji: '♉' },
    { name: 'Gemini', start: [5, 21], end: [6, 20], emoji: '♊' },
    { name: 'Cancer', start: [6, 21], end: [7, 22], emoji: '♋' },
    { name: 'Leo', start: [7, 23], end: [8, 22], emoji: '♌' },
    { name: 'Virgo', start: [8, 23], end: [9, 22], emoji: '♍' },
    { name: 'Libra', start: [9, 23], end: [10, 22], emoji: '♎' },
    { name: 'Scorpio', start: [10, 23], end: [11, 21], emoji: '♏' },
    { name: 'Sagittarius', start: [11, 22], end: [12, 21], emoji: '♐' },
  ];

  const getZodiacSign = () => {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    const month = birth.getMonth() + 1;
    const day = birth.getDate();

    for (const sign of zodiacSigns) {
      const [startMonth, startDay] = sign.start;
      const [endMonth, endDay] = sign.end;

      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return sign;
      }
    }
    return zodiacSigns[0];
  };

  const zodiac = getZodiacSign();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Calculator Input */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h1 className="text-3xl font-bold mb-6 text-center">Age Calculator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Date of Birth</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Calculate Age On</label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {age && (
          <div className="space-y-6">
            {/* Main Age Display */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg">
              <div className="text-6xl font-bold mb-2">
                {age.years}
              </div>
              <div className="text-2xl">
                years, {age.months} months, {age.days} days
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">{age.totalMonths}</div>
                <div className="text-sm text-gray-600">Total Months</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600">{age.totalWeeks.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Weeks</div>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-pink-600">{age.totalDays.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Days</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600">{age.totalHours.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Hours</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600">{age.totalMinutes.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Minutes</div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600">{age.daysUntilBirthday}</div>
                <div className="text-sm text-gray-600">Days Until Birthday</div>
              </div>
            </div>

            {/* Next Birthday */}
            <div className="p-6 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg text-center">
              <div className="text-xl font-semibold mb-2">🎂 Next Birthday</div>
              <div className="text-2xl font-bold text-pink-600">{age.nextBirthday}</div>
            </div>

            {/* Zodiac Sign */}
            {zodiac && (
              <div className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg text-center">
                <div className="text-5xl mb-2">{zodiac.emoji}</div>
                <div className="text-2xl font-bold">{zodiac.name}</div>
                <div className="text-sm text-gray-600 mt-1">Your Zodiac Sign</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* How It Works */}
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">How Age is Calculated</h2>
        <div className="space-y-4 text-gray-700">
          <p>Age is calculated by finding the difference between your birth date and the target date. The calculator provides:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Years, Months, Days:</strong> Precise age in calendar units</li>
            <li><strong>Total Days:</strong> Number of days you&apos;ve been alive</li>
            <li><strong>Total Weeks:</strong> Days divided by 7</li>
            <li><strong>Total Months:</strong> Approximate months (years × 12 + months)</li>
            <li><strong>Days Until Birthday:</strong> Days remaining until your next birthday</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <details className="mb-3 p-4 bg-gray-50 rounded">
          <summary className="font-semibold cursor-pointer">How accurate is this age calculator?</summary>
          <p className="mt-2 text-gray-700">This calculator is 100% accurate. It accounts for leap years and varying month lengths.</p>
        </details>
        <details className="mb-3 p-4 bg-gray-50 rounded">
          <summary className="font-semibold cursor-pointer">Can I calculate age on a past date?</summary>
          <p className="mt-2 text-gray-700">Yes! Simply change the &quot;Calculate Age On&quot; date to any date after your birth date.</p>
        </details>
        <details className="p-4 bg-gray-50 rounded">
          <summary className="font-semibold cursor-pointer">Why does the calculator show my zodiac sign?</summary>
          <p className="mt-2 text-gray-700">Your zodiac sign is determined by your birth date and can be a fun addition to your age calculation.</p>
        </details>
      </div>
    </div>
  );
}