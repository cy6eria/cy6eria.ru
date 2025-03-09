'use client';

import React, { Fragment, useRef, useState } from 'react';
import { WorkHistoryRecord } from '../WorkHistoryRecord';
import { EducationRecord } from '../EducationRecord';
import { Header } from './components';
import styles from './CV.module.css';
import type { Settings, Data } from './CV.types';

interface CVProps {
  en: {
    settings: Settings;
    data: Data;
  };
  es: {
    settings: Settings;
    data: Data;
  };
}

export const CV = (props: CVProps) => {
    const [locale, setLocale] = useState<'en'|'es'>('en');
    const cvContainer = useRef(null);

    const { settings, data } = props[locale] ?? props.en;
    const { name, position, contacts, summary, workHistory,education, language, keySkills } = data;
    
    return (
      <>
        <div className={styles.controls}>
          <button type='button' onClick={() => setLocale('en')}>EN</button>
          <button type='button' onClick={() => setLocale('es')}>ES</button>
        </div>
        <div ref={cvContainer} className={styles.wrapper}>
          <Header name={name} position={position} contacts={contacts} />
          <main className={styles.main}>
              <p>{summary}</p>

              <div className={styles['split-layout']}>
                <div>
                  <h2>{settings.keySkills.title}</h2>
                  <dl>
                    {keySkills.map((i) => (
                      <Fragment key={i.label}>
                        <dt>{i.label}</dt><dd>{i.value}</dd>
                      </Fragment>
                    ))}
                  </dl>
                </div>
                <div>
                  <h2>{settings.language.title}</h2>
                  <dl>
                    {language.map((i) => <Fragment key={i.label}><dt>{i.label}</dt><dd>{i.value}</dd></Fragment>)}
                  </dl>
                </div>
              </div>

              <div>
                <h2>{settings.workHistory.title}</h2>
                <div className={styles.sectionsList}>
                  {workHistory.map(({ companyName, location, position, startDate, endDate, description, responsibilities, achievements, technologies }) => (
                      <WorkHistoryRecord
                          locale={locale}
                          settings={settings.workHistory.items}
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
                <h2>{settings.education.title}</h2>
                <div className={styles.sectionsList}>
                  {education.map(({ name, startDate, endDate, degree }) => (
                      <EducationRecord
                          locale={locale}
                          key={name}
                          name={name}
                          startDate={startDate}
                          endDate={endDate}
                          degree={degree}
                      />
                  ))}
                </div>
              </div>
          </main>
        </div>
      </>
    );
}
