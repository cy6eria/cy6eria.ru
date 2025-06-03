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
  // es: {
  //   settings: Settings;
  //   data: Data;
  // };
}

export const CV = (props: CVProps) => {
    const [locale, setLocale] = useState<'en'|'es'>('en');
    const cvContainer = useRef(null);

    const { settings, data } = props[locale] ?? props.en;
    const { name, position, contacts, summary, workHistory,education, highlights, language, keySkills } = data;
    
    return (
      <>
        {/* <div className={styles.controls}>
          <button type='button' onClick={() => setLocale('en')}>EN</button>
          <button type='button' onClick={() => setLocale('es')}>ES</button>
        </div> */}
        <div ref={cvContainer} className={styles.wrapper}>
          <Header name={name} position={position} contacts={contacts} summary={summary} />
          <main className={styles.main}>
            <div className={styles['split-layout']}>
              <div className="flex gap-4 flex-col">
                <div>
                  <h2>{settings.highlights.title}</h2>
                  <ul className="list-disc list-inside">
                    {highlights.map((value) => (
                      <li>{value}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2>{settings.workHistory.title}</h2>
                  <div className="flex flex-col gap-5">
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
              </div>
              <div className="flex gap-4 flex-col">
                <div>
                  <h2>{settings.keySkills.title}</h2>
                  <ul>
                    {keySkills.map((i) => (
                      <Fragment key={i.label}>
                        <li><span className="font-bold inline">{i.label}: </span> {i.value}</li>
                      </Fragment>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2>{settings.language.title}</h2>
                  <dl className="grid grid-cols-2 gap-1">
                    {language.map((i) => (
                      <Fragment key={i.label}>
                        <dt className="font-bold">{i.label}</dt>
                        <dd className="text-right">{i.value}</dd>
                      </Fragment>
                    ))}
                  </dl>
                </div>

                <div>
                  <h2>{settings.education.title}</h2>
                  <div className="flex flex-col">
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
              </div>
            </div>
          </main>
        </div>
      </>
    );
}
