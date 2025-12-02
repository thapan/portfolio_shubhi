import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const radarData = [
  { skill: 'Wireless/RF', value: 95, fullMark: 100 },
  { skill: 'Automation', value: 92, fullMark: 100 },
  { skill: 'Python/Perl', value: 88, fullMark: 100 },
  { skill: 'Testing', value: 95, fullMark: 100 },
  { skill: 'ML/Analytics', value: 75, fullMark: 100 },
  { skill: 'Cloud/AWS', value: 80, fullMark: 100 },
];

export default function SkillRadarChart({ activeSkill }) {
  const highlighted = activeSkill || null;

  const renderDot = (props) => {
    const { cx, cy, payload } = props;
    const isActive = highlighted === payload.skill;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={isActive ? 7 : 4}
        fill={isActive ? '#fbbf24' : '#8b5cf6'}
        stroke={isActive ? '#fff' : '#8b5cf6'}
        strokeWidth={isActive ? 2 : 1.5}
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
            <PolarGrid
              stroke="rgba(139, 92, 246, 0.2)"
              strokeDasharray="3 3"
            />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickLine={{ stroke: 'rgba(139, 92, 246, 0.3)' }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: '#6b7280', fontSize: 10 }}
              axisLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
            />
            <Radar
              name="Skills"
              dataKey="value"
              stroke={highlighted ? '#a78bfa' : '#8b5cf6'}
              fill="url(#radarGradient)"
              fillOpacity={highlighted ? 0.35 : 0.6}
              strokeWidth={highlighted ? 3 : 2}
              dot={renderDot}
              activeDot={false}
            />
            <defs>
              <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.4} />
              </linearGradient>
            </defs>
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <p className="text-gray-500 text-sm">
          {highlighted ? `${highlighted} highlighted` : 'Core competency overview'}
        </p>
      </div>
    </motion.div>
  );
}
