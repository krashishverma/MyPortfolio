import React from 'react';
import LinearProgress from '../LinearProgress';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', percent: 90 },
    { name: 'React', percent: 85 },
    { name: 'Node.js', percent: 80 },
    { name: 'HTML/CSS', percent: 95 },
  ];

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className='text-Snow text-xs font-bold'>Skills</span>
        <div className="flex flex-col space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <div className="flex justify-between">
                <span className='text-xs text-Snow'>{skill.name}</span>
                <span className='text-xs text-Snow'>{skill.percent}%</span>
              </div>
              <LinearProgress percent={skill.percent} strokeColor="#1fdf64" height={4} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
