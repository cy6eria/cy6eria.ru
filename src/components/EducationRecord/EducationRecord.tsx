import React from 'react';

interface EducationRecordProps {
  name: string;
  startDate: Date;
  endDate: Date;
  degree: string;
}

const formater = Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' });

export const EducationRecord = (props: EducationRecordProps) => {
  const { name, startDate, endDate, degree } = props;

  return (
    <section>
      <h3>{name}</h3>
      <h4>{degree}</h4>
      <div><time>{formater.format(startDate)}</time> – <time>{formater.format(endDate)}</time></div>
    </section>  
  );
}
