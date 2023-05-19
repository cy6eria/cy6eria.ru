import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './WorkHistoryRecord.module.css';

interface WorkHistoryRecordProps {
    companyName: string;
    location: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
    responsibilities: string;
    achievements?: string;
    technologies: string[];
}

const formater = Intl.DateTimeFormat('en', { year: 'numeric', month: 'short' });

export const WorkHistoryRecord = (props: WorkHistoryRecordProps) => {
    const { companyName, location, position, startDate, endDate, description, responsibilities, achievements, technologies } = props;

    return (
      <section className={styles.section}>
        <header className={styles.header}>
          <h3 className={styles.position}><span>{position}</span></h3>
          <div className={styles.period}><time>{formater.format(startDate)}</time> – <time>{endDate === null ? 'Now' : formater.format(endDate)}</time></div>
        </header>
        <h4><span className={styles.company}>{companyName}</span>, <address className={styles.address}>{location}</address></h4>
        <ReactMarkdown>{description}</ReactMarkdown>

        <h4>Responsibilities</h4>

        <ReactMarkdown>{responsibilities}</ReactMarkdown>

        <h4>Achievements</h4>

        {achievements && <ReactMarkdown>{achievements}</ReactMarkdown>}

        <p className={styles.technologies}>Technologies: {technologies.map((i) => <span key={i}>{i}</span>)}</p>
      </section>   
    );
}
