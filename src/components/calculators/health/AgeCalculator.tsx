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

    if (birth > target) { setAge(null); return; }

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) { years--; months += 12; }

    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < target) nextBirthday.setFullYear(target.getFullYear() + 1);
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24));

    setAge({
      years, months, days, totalDays, totalWeeks, totalMonths, daysUntilBirthday,
      nextBirthday: nextBirthday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
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
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Input */}
      <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm border">
        <h1 className="text-2xl font-bold mb-4 text-center">Age Calculator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full p-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Calculate On</label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full p-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
            />
          </div>
        </div>

        {age && (
          <div className="space-y-4">
            {/* Main Age Display */}
            <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg">
              <div className="text-5xl font-bold">{age.years}</div>
              <div className="text-lg">years, {age.months} months, {age.days} days</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 bg-secondary/50 rounded-lg text-center">
                <div className="text-xl md:text-2xl font-bold">{age.totalMonths}</div>
                <div className="text-xs text-muted-foreground">Months</div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg text-center">
                <div className="text-xl md:text-2xl font-bold">{age.totalWeeks.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Weeks</div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg text-center">
                <div className="text-xl md:text-2xl font-bold">{age.totalDays.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
            </div>

            {/* Birthday & Zodiac */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4 bg-secondary/30 rounded-lg text-center">
                <div className="text-2xl mb-1">🎂</div>
                <div className="text-sm text-muted-foreground">Next birthday in</div>
                <div className="font-bold">{age.daysUntilBirthday} days</div>
              </div>
              {zodiac && (
                <div className="p-4 bg-secondary/30 rounded-lg text-center">
                  <div className="text-2xl mb-1">{zodiac.emoji}</div>
                  <div className="text-sm text-muted-foreground">Zodiac</div>
                  <div className="font-bold">{zodiac.name}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}