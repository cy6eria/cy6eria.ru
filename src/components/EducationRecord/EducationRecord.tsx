import React from 'react';

interface EducationRecordProps {
  locale: 'es' | 'en';
  name: string;
  startDate: Date;
  endDate: Date;
  degree: string;
}

export const EducationRecord = (props: EducationRecordProps) => {
  const { locale, name, startDate, endDate, degree } = props;

  const formater = Intl.DateTimeFormat(locale ?? 'en', { year: 'numeric', month: 'long' });

  return (
    <section>
      <div className="flex gap-1">
        <h3 className="font-bold">{name}</h3>
        <div><time>{formater.format(startDate)}</time> – <time>{formater.format(endDate)}</time></div>
      </div>
      <p>{degree}</p>
    </section>  
  );
}
