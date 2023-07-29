import React from 'react';

const SkillDisplay = () => {
  const skills = [
    { title: 'HTML', percent: '95' },
    { title: 'CSS', percent: '70' },
    { title: 'Tailwind CSS', percent: '90' },
    { title: 'JavaScript', percent: '70' },
    { title: 'Alpine JS', percent: '80' },
    { title: 'PHP', percent: '65' },
    { title: 'Laravel', percent: '75' },
  ];

  const [currentSkill, setCurrentSkill] = React.useState(skills[0]);
  const circumference = 2 * (22 / 7) * 120;

  return (
    <main className="grid  text-gray-100  place-content-center">
       
        <div className="flex items-center justify-center">
          <svg className="transform -rotate-90 w-60 h-60">
            <circle cx="120" cy="120" r="90" stroke="currentColor" strokeWidth="30" fill="transparent" className="text-gray-700" />
            <circle
             cx="120" cy="120" r="90"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
              className="text-blue-500"
            />
          </svg>
          <span className="absolute text-5xl text-gray-700">{`${currentSkill.percent}%`}</span>
        </div>
      
    </main>
  );
};

export default SkillDisplay;
