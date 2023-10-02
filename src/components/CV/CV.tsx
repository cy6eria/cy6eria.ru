'use client';

import React, { Fragment, useRef } from 'react';
import { WorkHistoryRecord } from '../WorkHistoryRecord';
import { EducationRecord } from '../EducationRecord';
import { Header } from './components';
import styles from './CV.module.css';

interface CVProps {
  name: string;
  position: string;
  contacts: { type: string; value: string; }[];
  summary: string;
  workHistory: {
      companyName: string;
      location: string;
      position: string;
      startDate: Date;
      endDate: Date | null;
      description?: string;
      responsibilities?: string;
      achievements?: string;
      technologies: string[];
  }[];
  education: {
    name: string;
    startDate: Date;
    endDate: Date;
    degree: string;
  }[];
  keySkills: { label: string, value: number }[];
  language: { label: string, value: string }[];
}

export const CV = (props: CVProps) => {
    const { name, position, contacts, summary, workHistory, education, keySkills, language } = props;
    const cvContainer = useRef(null);
    
    return (
      <div ref={cvContainer} className={styles.wrapper}>
        <Header name={name} position={position} contacts={contacts} />
        <main className={styles.main}>
            <p>{summary}</p>
            <div>
              <h2>Work history</h2>
              <div className={styles.sectionsList}>
                {workHistory.map(({ companyName, location, position, startDate, endDate, description, responsibilities, achievements, technologies }) => (
                    <WorkHistoryRecord
                        key={companyName}
                        companyName={companyName}
                        location={location}
                        position={position}
                        startDate={startDate}
                        endDate={endDate}
                        description={description}
                        responsibilities={responsibilities}
                        achievements={achievements}
                        technologies={technologies}
                    />
                ))}
              </div>
            </div>
            <div>
              <h2>Education</h2>
              <div className={styles.sectionsList}>
                {education.map(({ name, startDate, endDate, degree }) => (
                    <EducationRecord
                        key={name}
                        name={name}
                        startDate={startDate}
                        endDate={endDate}
                        degree={degree}
                    />
                ))}
              </div>
            </div>
            <div className={styles['split-layout']}>
              <div>
                <h2>Key skills</h2>
                <dl>
                  {keySkills.map((i) => <Fragment key={i.label}><dt>{i.label}</dt><dd>{i.value} yr.</dd></Fragment>)}
                </dl>
              </div>
              <div>
                <h2>Language</h2>
                <dl>
                  {language.map((i) => <Fragment key={i.label}><dt>{i.label}</dt><dd>{i.value}</dd></Fragment>)}
                </dl>
              </div>
            </div>
        </main>
      </div>
    );
}
