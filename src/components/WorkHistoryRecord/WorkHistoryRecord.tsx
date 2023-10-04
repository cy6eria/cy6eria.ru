import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './WorkHistoryRecord.module.css';

interface WorkHistoryRecordProps {
    locale: 'es' | 'en';
    settings: {
      responsibilities: string;
      achievements: string;
      technologies: string;
    };
    companyName: string;
    location: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    description?: string;
    responsibilities?: string;
    achievements?: string;
    technologies: string[];
}

export const WorkHistoryRecord = (props: WorkHistoryRecordProps) => {
    const { locale, settings, companyName, location, position, startDate, endDate, description, responsibilities, achievements, technologies } = props;

    const formater = Intl.DateTimeFormat(locale ?? 'en', { year: 'numeric', month: 'short' });

    return (
      <section className={styles.section}>
        <header className={styles.header}>
          <h3 className={styles.position}><span>{position}</span></h3>
          <div className={styles.period}><time>{formater.format(startDate)}</time> – <time>{endDate === null ? 'Now' : formater.format(endDate)}</time></div>
        </header>
        <h4><span className={styles.company}>{companyName}</span>, <address className={styles.address}>{location}</address></h4>
        {description && <ReactMarkdown>{description}</ReactMarkdown>}

        {responsibilities && (
          <>
            <h4>{settings.responsibilities}</h4>

            <ReactMarkdown>{responsibilities}</ReactMarkdown>
          </>
        )}

        {achievements && (
          <>
            <h4>{settings.achievements}</h4>
            <ReactMarkdown>{achievements}</ReactMarkdown>
          </>
        )}

        <p className={styles.technologies}>{settings.technologies}: {technologies.map((i) => <span key={i}>{i}</span>)}</p>
      </section>   
    );
}
